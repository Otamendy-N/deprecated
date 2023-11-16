const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const search = require("youtube-search");

exports.start = (client, options) => {
    //get the Music class
    class Music {
        constructor(client, options) {
            this.youtubeAPIKey = (options && options.youtubeAPIKey);
            this.botPrefix     = 'l.';
            this.embedColor    = 15418722;
            this.maxQueueSize  = parseInt((options && options.maxQueueSize) || 50);
            this.maxVolume     = parseInt((options && options.maxVolume) || 200);
        }
    }

    let music  = new Music(client, options);

    exports.client = music;

    client.on("message", (message) => {
        
        //Definiendo argumentos
        let args = message.content.slice(music.botPrefix.length).trim().split(" ");
        let command = args.shift().toLowerCase();

        //Evitando el bucle entre bots
        if(!message.content.startsWith(music.botPrefix)) return;

        //Comandos
        if(command === "play") {
            playCommand(message, args)
        }

        if(command === "pause") {
            pauseCommand(message, args)
        }

        if(command === "resume") {
            resumeCommand(message, args);
        }

        if(command === "skip") {
            skipCommand(message, args);
        }

        if(command === "queue") {
            queueCommand(message, args);
        }

        if(command === "volume") {
            volumeCommand(message, args);
        }

    });


    let queue = {}


    async function getQueue(guild) {

        if (!queue[guild]) queue[guild] = {
            queue: [],
            songNames: [],
            songRequesters: [],
            loop: 0,
            volume: 0
        };
        return queue[guild];

    }


    async function play(message, connection, server) {

        server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: 'audioonly'}));

        //Set the volume
        server.dispatcher.setVolume(parseInt(200 / 100));

        //Set the volume in the server array
        server.volume=50
        
        server.dispatcher.on("end", async function() {

            //If loop is of
            if(server.loop === 0) {
                //Get rid of the just played song
                server.queue.shift();
                server.songRequesters.shift();
                server.songNames.shift();
            }

            //If there is another song
            if(server.queue[0]) {

                play(message, connection, server);

                    if(server.loop === 1) return;
                    let id = await ytdl.getVideoID(server.queue[0]);

                    let embed = new Discord.RichEmbed()
                    .setColor(music.embedColor)
                    .setTitle("Now Playing")
                    .setDescription(`**Now Playing**: ${server.songNames[0]}.\n**Song Requester**: ${server.songRequesters[0]}.`)
                    .setThumbnail(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)
                    message.channel.send(embed)

            } 

            if(!server.queue[0]) {
                //If there isn't 
                connection.disconnect();
                message.channel.send("🎧 | La lista esta vacia.");

            }

        });

    }

    /*-----------------------Estas son las funciones de los comandos--------------------*/

    async function playCommand(message, args) {

        const server = await getQueue(message.guild.id);
            
        //ver si hay alguien en un canal de voz
        if(!message.member.voiceChannel) return message.channel.send("❌ | Please join a Voice Channel.");

        //ver si se menciona la cancion
        if(!args.join(" ")) return message.channel.send("❌ | Please specify a Search String or a URL.");

        //ver si ellos llenaron la cola
        if(server.queue === music.maxQueueSize) return message.channel.send("❌ | Sorry. You have reached the max queue size.");

        //las opciones de busqueda
        var opts = {
            maxResults: 1,
            key: music.youtubeAPIKey
        };

    
        //Buscando la cancion
        search(args.join(" "), opts, async function(err, results) {

        //Atrapando errores
        if(err) message.channel.send("❌ | Sorry. There was an error searching that song.") && console.log(err);

        //EL primer resultado
        let res = results[0];

        //Ponerlo en la cola
        server.queue.push(res.link);
        server.songNames.push(res.title);
        server.songRequesters.push(message.author.tag);

        //Send the message
        let id = await ytdl.getVideoID(res.link)
        let embed = new Discord.RichEmbed()
        .setColor(music.embedColor)
        .setTitle("Added to queue")
        .setDescription(`**Added**: ${res.title}.\n**Requester**: ${message.author.tag}`)
        .setThumbnail(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)
        message.channel.send(embed);

        if(!message.guild.me.voiceChannel) await message.member.voiceChannel.join().then(function(connection) {
            play(message, connection, server);
            });
        
        });
    }


    async function pauseCommand(message, args) {

        //Get the server 
        let server = await getQueue(message.guild.id);

        //Check if there is a queue
        if(server.queue[0] === null) return message.channel.send("❌ | Sorry. Nothing is playing at the moment.");

        //Get the dispatcher
        let dispatcher = message.guild.me.voiceChannel.connection.player.dispatcher;

        //Pause the song
        dispatcher.pause();
  
        message.channel.send("▶ | Success. I have paused the current song.");

      }




      async function resumeCommand(message, args) {

        //Get the server 
        let server = await getQueue(message.guild.id);

        //Check if there is a queue
        if(server.queue[0] === null) return message.channel.send("❌ | Sorry. Nothing is playing at the moment.");

        //Get the dispatcher
        let dispatcher = message.guild.me.voiceChannel.connection.player.dispatcher;

        //Pause 
        dispatcher.resume();

        message.channel.send("⏸ | Success. I have resumed the current song");
      }

};
/* Base template made by JackMcRift#2343 */

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
client.music = require("discord.js-musicbot-addon");


client.on('ready', () => {
    // Notifica a la consola que el bot esta listo
    console.log(`[INFO]: ${client.user.tag} lista. Inicializo correctamente.`);
});

client.music.start(client, {
    youtubeKey: 'AIzaSyA4xq6Ta48Zy0xO6HGA4CmpqTZxAMQ_6xY',
    botPrefix: `${prefix}`, //Default if '!'
      // The PLAY command Object.
    play: {
        // Usage text for the help command.
        usage: `${prefix}play some tunes`,
        // Whether or not to exclude the command from the help command.
        exclude: false  
    },
    });

client.on("message", message => {
    
    // Definiendo los argumentos
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const noCommand = message.content.toLowerCase();
    
    // Evita un bucle
    if (message.author.bot) return;

    if (command === 'join') { 
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz || Canalvoz.type !== 'voice') {
        message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
        message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
         message.channel.send('Conectando...').then(m => {
              Canalvoz.join().then(() => {
                   m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
        }
    }
    
    // // Procesador de los no Comandos
    // try {        
    //     let noCommandFile = require(`./noCommands/${noCommand}.js`);
    //     noCommandFile.run(client, message, args, Discord, noCommand);
    //     console.log(`[INFO]: ${client.user.tag} a detectado, '${noCommand}'`)
    // } catch (err) {
    //     console.log(`[INFO]: no se a detectado ningun no comando`);
    //     console.error("[ERROR]: " + err.message);
    // }

    // Procesador de comandos
//     if(message.content.indexOf(config.prefix) !== 0) return;
    
//     try {
//         let commandFile = require(`./commands/${command}.js`);
//         commandFile.run(client, message, args, Discord);
//         console.log("[INFO]: " + message.author.tag + " ejecuto '" + command + "'");
//     } catch (err) {
//         console.log("[ERROR]: '" + command + "' is not an existing command.");
//         console.error("[ERROR]: " + err.message);
//         message.reply(`pss... escribe ${config.prefix}help para ver la lista de comandos ;)...`);
//     }
});


client.login(config.token);


 

 
 

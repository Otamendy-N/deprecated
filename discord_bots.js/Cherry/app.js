const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
client.music = require("discord.js-musicbot-addon");

let   prefix = config.prefix;


client.on('ready', () => {
  // Notifica a la consola que el bot está listo
  console.log(`[INFO]: ${client.user.tag.slice(0,-5)}, ready. Startup succesful.`);
});


// Modulo de comandos para reproducir musica
client.music.start(client, {
    youtubeKey: "AIzaSyA4xq6Ta48Zy0xO6HGA4CmpqTZxAMQ_6xY",
    botPrefix: "l.",
    embedColor: 15418722,
});

 
client.on("message", message => {
    
    // Evitando bucle entre bots
    if(message.content.indexOf(prefix) !== 0) return;

    
    // Definiendo los argumentos
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    // Procesador de comandos
    // try {
        
    //     console.log(`[INFO]: ${message.author.tag}, executed '${command}'`);

    //     let commandFile = require(`./commands/${command}.js`);
        
    //     commandFile.run(client, message, args, Discord);

    // } catch (err) {
        
    //     console.log(`[ERROR]: '${command}' is not a command.`);
        
    //     console.error(`[ERROR]: ${err.message}`);

    //     /* aqui tienes que crear un calculo para crear distintas respuestas */
    //     message.channel.send(`❌❌❌`)
    //         .then(m => {
    //             m.edit(`Psss... ${message.author.tag.slice(0,-5)}, escribe l.help para ver la lista de comandos...`)
    //         });

    // }

});


client.login(config.token); 
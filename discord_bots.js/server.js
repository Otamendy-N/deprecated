const Discord = require("discord.js");
const client = new Discord.Client();            //es para crear un nuevo cliente en discord
const config = require("./config.json")        


client.on("ready", () => {
    console.log("Encendido");
});


var prefix = config.prefix;

var token = config.token;


client.on("message" , (message) =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);      //esto coje el mensage y le quita el prefijo, luego le quita los espacios en blanco extras, y lo convirerte en un array separando las palabras
    const command = args.shift().toLowerCase();                                 //esto coje al array y le quita la primera palabra(el comando) y pasa todo a minuscula
    const send = message.channel;
    const noCommand = message.content.toLowerCase();

    //esto es para el estado de bot
    client.user.setPresence( {
        status: "online",
        game: {
            name: "Fornite",
            
            type: "STREAMING"
        }
    } );

    //esto es un comando si mucho uso :v
    let texto = args.join(" ");
    if(command === 'decir'){
        if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
        message.channel.send(texto);
    }
    
    //prevencion de bucle
    if (message.author.bot) return;                   

    //commands without prefix
    if (noCommand.includes('haiga')) {
        send.send("halla*");
    }

    if (noCommand.includes('jaja')||noCommand.includes('xd')){
        let lolMessage = ["XD", "lol", "xd", "xD", ";-;", ".^."];
        send.send(lolMessage[Math.floor(Math.random() * lolMessage.length)]);
    }

    //prevencion de bucle
    if (!message.content.startsWith(prefix)) return;   

    //these are the normal commands  
    if(command === 'avatar'){

        let img = message.mentions.users.first()
        if (!img) {
  
            const embed = new Discord.RichEmbed()
            .setImage(`${message.author.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
            message.channel.send({ embed });
  
        } else if (img.avatarURL === null) {
  
            message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");
  
        } else {
  
            const embed = new Discord.RichEmbed()
            .setImage(`${img.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
            message.channel.send({ embed });
  
        };
  
    }

    // if(message.content.startsWith(prefix + 'help')){

    //     message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    //     message.author.send('**Comandos de Luna|Schrowins|**\n```\n'+
    //                         '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
    //                         '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
    //                         '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
    //                         '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
    //                         '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
    //                         '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
    //                         '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
    //                         '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
    //                         '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```\n\n'+
         
    // }

    if (command === 'ping') {

        let ping = Math.floor(message.client.ping);
        
        message.channel.send(":ping_pong: Pong!")
          .then(m => {
    
              m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
          
          });
        
      }

      if(command === 'ban'){
    
        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
    
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        if(!razon) return message.channel.send('Escriba un razón, `-ban @username [razón]`');
        if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
        
    
        message.guild.member(user).ban(razon);
        message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
    
    }

    if(command === 'server'){

        var server = message.guild;
    
        const embed = new Discord.RichEmbed()
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)
        .addField('ID', server.id, true)
        .addField('Region', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
        .addField('Miembros', server.memberCount, true)
        .addField('Roles', server.roles.size, true)
        .setColor(0x66b3ff)
        
    message.channel.send({ embed });

    }

    if(command === 'user'){
        let userm = message.mentions.users.first()
        if(!userm){
        var user = message.author;
        
            const embed = new Discord.RichEmbed()
            .setThumbnail(user.avatarURL)
            .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
            .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
            .addField('ID', user.id, true)
            .addField('Estado', user.presence.status, true)
            .addField('Apodo', message.member.nickname, true)
            .addField('Cuenta Creada', user.createdAt.toDateString(), true)
            .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
            .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
            .setColor(0x66b3ff)
            
        message.channel.send({ embed });
        }else{
            const embed = new Discord.RichEmbed()
            .setThumbnail(userm.avatarURL)
            .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
            .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
            .addField('ID', userm.id, true)
            .addField('Estado', userm.presence.status, true)
            .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
            .setColor(0x66b3ff)
        
            message.channel.send({ embed });
        }
    }

    if(command === 'rol'){

        if(!args) return message.channel.send('Ingrese nombre del rol.');
        let mirol = message.guild.roles.find("name", args.join(" "));
        if(!mirol) return message.channel.send('Rol no encontrado en el servidor.');
    
        if(message.member.roles.has(mirol.id)) {
            message.channel.send('Si tienes el rol: `'+mirol.name+'`.');
        } else {
            message.channel.send('No tienes el rol: `'+mirol.name+'`.');
        }
    
    }

    if(command === 'miembrosrol'){
        
        if(!args) return message.channel.send('Ingrese nombre del rol.');
        let rol = message.guild.roles.find("name", args.join(" "));
        if(!rol) return message.channel.send('Rol no encontrado en el servidor.');
        let miembroroles = message.guild.roles.get(rol.id).members;
        message.channel.send(`Tienes a **${miembroroles.size}** miembro(s) con el rol **${args}**.`);
        
    }

    if(command === 'addrol'){

        let miembro = message.mentions.members.first();
        let nombrerol = args.slice(1).join(' ');
    
        let role = message.guild.roles.find("name", nombrerol);
        let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
    
        if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
         
        if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
        if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar, `-addrol @username [rol]`');
        if(!role) return message.channel.send('Rol no encontrado en el servidor.');
        
        miembro.addRole(role).catch(console.error);
        message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`);
    
    }

    if(command === 'removerol'){

        let miembro = message.mentions.members.first();
        let nombrerol = args.slice(1).join(' ');
    
        let role = message.guild.roles.find("name", nombrerol);
        let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
    
        if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
         
        if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
        if(!nombrerol) return message.channel.send('Escriba el nombre del rol a remover, `-removerol @miembro [rol]`');
        if(!role) return message.channel.send('Rol no encontrado en el servidor.');
        
        miembro.removeRole(role).catch(console.error);
        message.channel.send(`El rol **${role.name}** del miembro **${miembro.user.username}** fue removido  correctamente.`);
    
    }

    //estos son para la musica
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

    if (command === 'leave') { 
        let Canalvoz = message.member.voiceChannel;
        if (!Canalvoz) {
            message.channel.send('No estoy en un canal de voz.');
        } else {
            message.channel.send('Dejando el canal de voz.').then(() => {
            Canalvoz.leave();
            }).catch(error => message.channel.send(error));
        }   
    }

    if (commmand === 'play') {
        if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `-join` para unirme a un canal.').catch(error => message.channel.send(error));
        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/Desktop/musica/audio.mp3`);
    }

    switch (command) {
        case 'hola':
            send.send("hola");            
            break
        
        case 'embed':
            message.channel.send({embed:{
                color: 2244567,
                description: "Esto es un simple embed. And Ansus is gay :3"
            }});
            break

        case 'help':
            send.send("Lo siento, aun no le puedo ayudar");
            break
    
        case 'gracias':
            send.send("ok :)");
            break 

        case 'richembed':
            const embed = new Discord.RichEmbed() 
            .setTitle("Este es su título, puede contener 256 caracteres")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
            .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
            .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
            .setImage(message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
            .setURL("https://github.com/CraterMaik")
            .addField("Este es un título de campo, puede contener 256 caracteres",
                "Este es un valor de campo, puede contener 2048 caracteres.")
            .addField("Campo en línea", "Debajo del campo en línea", true)
            .addBlankField(true)
            .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
            
            message.channel.send({embed});
            break

        case 'link':
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "Enlace Embed",
                url: "https://github.com/CraterMaik",
                description: "Mesaje de prueba para la descripcion del embed.",
                fields: [{
                    name: "Campo1",
                    value: "Pueden tener diferentes campos con pequeñas descripciones."
                    },
                    {
                    name: "Campo2",
                    value: "Puedes poner [Enlaces web](https://github.com/CraterMaik) dentro del embed."
                    },
                    {
                    name: "Campo3",
                    value: "Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de __u__ embed."
                    }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "github.com/CraterMaik"
                }
            }});
            send.send("es que eres tonto macho, como se supone que te voy a mandar algo si no pusiste el comando para que te mande nada ;-;");
            break

        case'luna':
            let first = ["uhmm...    ", "espera dejame pensar...    ", "ahmm...    ", "no se...  hmm...    "];
            let rpts = ["Sí", "Nope", "¿Por qué?", "Por faaavor", "Tal vez", "Nope, no sé", "Definitivamente", "puede ser..."," ¡Claro! "," See "," No "," Por supuesto! "," Por supuesto que no "];
            if (!texto) return message.reply('Preguntame algo :)');
            send.send(first[Math.floor(Math.random() * first.length)] + rpts[Math.floor(Math.random() * rpts.length)]);
            break

        default:
            send.send("psss... escribe l.help para ver los comandos... :3");
            break;
    }

});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.login(token);
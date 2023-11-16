const Discord      = require("discord.js");
const client       = new Discord.Client(); 

const config       = require("../data/config.json"      );
const channelsJson = require("../data/channelsJson.json");
const fs           = require("fs-extra"                );
/*no instanciar*/    require('colors'                  );




module.exports = (client, fs, config, Discord, channelsJson) => {
    client.on('ready',()=>{console.log(`[INFO]:`.cyan+` ${client.user.tag.slice(0,-5)}, ready! Startup succesful.`);});

    // ID of the gods
    const jackID = '489653590516957185';
    const wamuID = '480372670169481228';

    const webConst={
        "log": new Discord.WebhookClient("569231374364573696","6wuVtSyL_7qVlYrg7s09taGTPwlKE-Ei_K_awGZ9V24rMj0b2cKQrbxGBqUYxggtke4Y")
    }

    const list = {fs,channelsJson,webConst}//Lista de importacion 

    
    
    // Loading commands
    try {
        fs.readdir('./bot/commands/', (err, files) => {
            let jsFiles = files.filter(file => file.split(".").pop() === "js");
            if(jsFiles.length <= 0){
                return console.log("[ALERT!]:".yellow+" No commands found");
            }
        
            jsFiles.forEach(f => {
                let props = require(`./commands/${f}`);
                client.commands.set(props.help.name, props);
            });
            
            console.log(`[INFO]:`.cyan+` Loaded ${client.commands.size} commands.`);
        });

    } catch (error) {
        console.log(error)
    }
    
    


    // ACTIVITIES
    const activities_list = [
        `Clever Bot`, 
        `JS IA !!!`,
        `PsicoJico`,
        `NOW IN BETA`,
        `LoL`,
        `Minecraft`,
        `you doesn't exist`,
        `Ur live is a lie`
    ];
    
    client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
            client.user.setActivity(activities_list[index],{
                type: "STREAMING",
                url: "https://www.twitch.tv/IA4ever"
            });
        }, 10000);
    });

    

    function clean(text) {
        if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
        return text;
    }
    

    // Commmands section
    
    const codeRunChannels = require("../data/channelsJson.json").coderun;
    const sistemChannels  = require("../data/channelsJson.json").sistem;
    const channelConsole= require('./consoleChannel/console');
    client.commands = new Discord.Collection();
    

    client.on('message', (message) => {   
        let messageArray = message.content.toLowerCase().split(" ");//words array
        if (message.author.bot)return;//anti-bot   
        
        if (messageArray[0] + messageArray[1] =="coderun")
        {
            messageArray = message.content.split(" ");
            codeRun(message,messageArray);
            console.log(`[INFO]: codeRun() function has been used '^'// . `.cyan);
        }

        if (message.channel.name == 'console'){
            channelConsole(client, message, messageArray, jackID, wamuID);
        };
        
        messageArray = message.content.toLowerCase().split(" ");
        let cmdFile = client.commands.get(messageArray[1]);
        
        // Running commands
        if (messageArray[0] == "sys" && messageArray[1]){
            messageArray = message.content.split(" ");
            if(!cmdFile){
                message.channel.send("``2300``\n```js\n [Error 2200]: Command not found on sys options.```");
                return;
            } 
            cmdFile.run(client, message, list, messageArray, jackID, wamuID);
            console.log(`[INFO]: ${message.author.username.green} has used ${cmdFile.help.name}.`.cyan);
            return; 
        } else if (messageArray[0] == "sys" && !messageArray[1]){
            message.channel.send("``2300``\n```js\n [Error 2200]: Please specifies a command.```");
        }

        // Running codeRun() function
        if (codeRunChannels.indexOf(message.channel.id) != "-1"){
            messageArray = message.content.split(" ");

            if(message.content[0]+message.content[1]=="//")return;
            messageArray.unshift("..");
            messageArray.unshift("..");
            codeRun(message, messageArray);
            return;
        }




        if (sistemChannels.indexOf(message.channel.id)  != "-1"){    
            if(message.content[0]+message.content[1]=="//")return;
                messageArray.unshift("..");
                cmdFile = client.commands.get(messageArray[1]); 
            if(!cmdFile)message.channel.send("``2300``\n```js\n [Error 2300]: fatal error at sistem command.```");return; 
                cmdFile = client.commands.get(messageArray[1]); 
                cmdFile.run(client, message, list, messageArray);
            return;
        }

    });


    //new member
    client.on("guildMemberAdd", function(member){

    });


    function codeRun(message,messageArray){
        function off(){
            if(message.author.id != wamuID && message.author.id != jackID){
                message.channel.send("``2201``\n```js\n [ERROR 2201]: You can't execute this command.```");
                return;
            }
            
            let act=codeRunChannels[codeRunChannels.lenght - 1];
                    codeRunChannels[codeRunChannels.lenght - 1] = codeRunChannels.indexOf(message.channel.id);
                    codeRunChannels[codeRunChannels.indexOf(message.channel.id)] = act;
                    codeRunChannels.pop();


            saveNow();
            console.log(`[INFO]: ${message.author.username} has truned off the code run mode.`.cyan);
            return "[INFO]: Code run mode truned off.";
        }

        function on(){
            if(message.author.id != wamuID && message.author.id != jackID){
                message.channel.send("``2201``\n```xl\n [ERROR-2201]: You can not execute this command.```");
                return;
            }
            codeRunChannels.push(message.channel.id);
            saveNow();
        
            console.log(`[INFO]: ${message.author.username} has truned on the code run mode.`.cyan);
            return  "[INFO]: Code run mode truned on.";
        }
        
        const saveNow = function(){
            fs.writeFile("../data/channelsJson.json", JSON.stringify(channelsJson), (err) => {
                if (err){
                    console.log(err)
                }           
            });
        }

        try { 
            const code = messageArray.slice(2).join(" ");
            let evaled = eval(code);
    
            if (typeof evaled !== "string")evaled = require("util").inspect(evaled);
                
            let embed = new Discord.RichEmbed()
                .setAuthor('Code run (js)')
                .setColor('0x265e3d')
                .addField(':inbox_tray: Input', `\`\`\`js\n${code}\`\`\``)
                .addField(':outbox_tray: Output', `\`\`\`js\n${clean(evaled)}\n\`\`\``)
                message.channel.send(embed);

        } catch (err) {
            message.channel.send(`\`[ERROR]: \` \`\`\`xl\n${clean(err)}\n\`\`\``);
            console.error(err);
        }
    }
}
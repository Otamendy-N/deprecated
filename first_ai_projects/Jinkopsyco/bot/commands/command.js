const Discord = require("discord.js"); //  We need the discord.js package
const config = require("../../data/config.json");
const ownerData = require("../../data/ownerData.json");
const channelsJson = require("../../data/channelsJson.json");
const fs = require('fs-extra');

module.exports.run = async (client, message, list, messageArray, jackID, wamuID) => {
    list // <-- Y esto pa'quee??
    if(message.author.id != wamuID && message.author.id != jackID){
        message.channel.send("``2301``\n```js\n [ERROR-2301]: You can not execute this command.```");
        return;
    }

    if (messageArray[2] === "mode"){
        console.log("usaste el metodo 'mode'");
        switch (messageArray[3]){
            case "true":
                if(!messageArray[4]){
                    message.channel.send("``2331``\n```js\n [ERROR-2331]: Especify a channel (by id)```"); 
                } 

                if(!messageArray[6])messageArray[6] = "...";
                console.log("usaste la opcion true del metodo mode");

                switch(messageArray[5]+messageArray[6]){
                    case "coderun":
                        channelsJson.coderun.push(messageArray[4]);
                        message.channel.send("[INFO]: SET IT CORRECTLY!!");
                        console.log(`[INFO!!]: ${message.author.username} has activated the code run mode in ${message.channel.name} channel!!`.blue);
                        break;
                    case "sistem...":
                        channelsJson.sistem.push(messageArray[4]);
                        message.channel.send("[INFO]: SET IT CORRECTLY!!");
                        break;
                    default:
                        message.channel.send("``2333``\n```js\n [ERROR-2333]: code run Or sistem```");
                        break;
                }

                break;
            case "false":
                channelsJson = [];
                message.channel.send("[INFO]: Set it to 0.");
                console.log("usaste la opcion fasle del metodo mode");
                break;
            default:
                message.channel.send("``2332``\n```js\n [ERROR-2332]: true Or false??```"); 
                console.log("no usaste nada ;-;");
                break;
        }
    }

    await fs.writeFile("../../data/channelsJson.json", JSON.stringify(channelsJson), (err) => {
        if (err) console.log(err);
    });  
}

module.exports.help = {
    name: "command" 
}



/*
0:No puede empesar por 0
1:Error de la IA
2:Error de commando
        0: Error de JS Code Run
        1: Commando de dominio 1
        2: Commando de dominio 2
        3: Commando de dominio 3
             0: Error de condicional
             1: Error de Promessa
             2: Error de funcion
             3: Error de escritura en el commando
            Despues hay que tener en cuenta el numero de errores en cada tipo 
*/
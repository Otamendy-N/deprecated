const Discord = require("discord.js"); //  We need the discord.js package
const config = require("../../data/config.json");
const ownerData = require("../../data/ownerData.json");

module.exports.run = async (client, message, list, messageArray) => {
    
    // -----CONSTRUCTORS AND CLASSES-----
    // En esta clase van todos los comandos de generar algo, por ahora no sirve de mucho pero mas adelante va a ser util cuando el codigo cresca
    class Generate{
        messageFor(msg) {
            if (msg){
                message.channel.send(msg);
            } else {
                message.channel.send('no se que escribir');// Mensaje de prueba
            };
        }

        object(){

        }

        dataOf(){

        }

        matrix(){

        }
    }

    // Aqui va todo lo que sea necesario para llamar datos
    class DataOf{
        constructor(object){

        }

        matrix(){

        }
    }
    
    // -----CODE-----
    // Instances
    const generate = new Generate();
    const dataOf   = new DataOf();



    if (messageArray[2] + messageArray[3] == 'generatemessage'){
        let msg = messageArray.slice(4).join(" ");
        generate.messageFor(msg);
    }
}



module.exports.help = {
    name: "call" 
}




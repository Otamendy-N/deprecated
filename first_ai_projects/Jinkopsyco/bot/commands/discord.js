const Discord = require("discord.js"); //  We need the discord.js package
const config = require("../../data/config.json");
const ownerData = require("../../data/ownerData.json");
module.exports.run = async (client, message, list) => {
    message.channel.send("discord commands"); 
}
module.exports.help = {
    name: "discord" 
}
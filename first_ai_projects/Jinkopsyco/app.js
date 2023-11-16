const Discord      = require("discord.js");
const client       = new Discord.Client(); 

const config       = require("./data/config.json"      );
const channelsJson = require("./data/channelsJson.json");
const fs           = require("fs-extra"                );
const bot          = require("./bot/bot.js"            );
/*no instanciar*/    require('colors'                  );/* Este no hace falta aqui pero igual vamos a dejarlo. */

bot(client, fs, config, Discord, channelsJson);


client.login(config.token);


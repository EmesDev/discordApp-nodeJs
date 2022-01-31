const Discord = require('discord.js');
const { Intents } = require('discord.js');
require('dotenv').config();
dotenv.config();

const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

client.on("ready", ()=>{
    console.log("Bot is ready!");
});

client.on("massageCreate", (msg)=>{
    if(msg.content === "Fala guri") {
        msg.reply({
            content: "É os guri",
        })
    }
    if(msg.content === " Bom Dia") {
        msg.reply({
            content: "Bom dia" + msg.author.username,
        })
    }
})
const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
  client,
  prefix: "!",
  owners: ["178924031829868545"]
}

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot,reload) => require("./handlers/events")(bot,reload);
client.loadCommands = (bot,reload) => require("./handlers/commands")(bot,reload);

client.loadEvents(bot,false);
client.loadCommands(bot,false);

module.exports = bot;
// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// client.on("messageCreate", (message) => {
//     if (message.content == "!hi"){
//         message.reply("Hello World!")
//     }
// })

// const welcomeChannelId = "345242129401905153"



client.login(process.env.TOKEN)
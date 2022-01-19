const Discord = require('discord.js');
const generateImage = require("./generateImage");
require("dotenv").config();

const client = new Discord.Client({ 
  intents:[
    "GUILDS", 
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
  ]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.TOKEN);

const prefix = "!";

client.on('messageCreate', (message) => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

});

const welcomeChannelID = "345242129401905153";

client.on("guildMemberAdd", async member => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeChannelID).send({content: `<@${member.id}> Welcome to the server!`, files: [img]});
})
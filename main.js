const Discord = require('discord.js');
require("dotenv").config();

const client = new Discord.Client({ 
  intents:[
    "GUILDS", 
    "GUILD_MESSAGES"
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

  if(command === 'cum'){
    message.channel.send('Cum!!!');
  }

  if(command === 'nocum'){
    message.channel.send('You will not cum.');
  }

  if(command === 'coom'){
    message.channel.send('IM COOOOOMIIIIIING AAAAAAAAH');
    message.channel.send('https://tenor.com/view/coom-coomer-coomed-gif-15144427');
  }
});
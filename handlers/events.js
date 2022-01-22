const {getFiles} = require('../util/functions.js')
const {DisTube} = require('distube');

module.exports = (bot, reload) => {
  const {client} = bot;
  let events = getFiles("./events/",".js");

  if (events.length === 0){
    console.log('No events to load!');
  }

  events.forEach((f,i) => {
    if(reload){
      delete require.cache[require,resolve(`../event/´${f}`)];
    }
    const event = require(`../events/${f}`);
    client.events.set(event.name, event);

    if(!reload){
      console.log(`${i + 1}. ${f} loaded`)
    }
  })
  if(!reload){
    initEvents(bot);
  }
}

function triggerEventHandler(bot,event,...args){
  const {client} = bot;

  try {
    if (client.events.has(event)){
      client.events.get(event).run(bot, ...args)
    } else {
      throw new Error(`Event ${event} does not exist!`)
    }
  }catch(error){
    console.error(error);
  }
}

function initEvents(bot){
  const {client} = bot;

  client.on("ready", () => {
    triggerEventHandler(bot,"ready");
  })

  client.on("messageCreate", (message) => {
    triggerEventHandler(bot, "messageCreate", message);
  })

  client.on("guildMemberAdd", async (member) => {
    triggerEventHandler(bot, "guildMemberAdd", member);
  })

  bot.client.distube = new DisTube(bot.client, {searchSongs : 0, emitNewSongOnly: true});
  bot.client.distube.on("playSong", (queue, song) => queue.textChannel.send(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`));
  bot.client.distube.on("finish", queue => queue.textChannel.send("No more song in queue"));
  bot.client.distube.on("disconnect", queue => queue.textChannel.send("Disconnected from the channel!"));
  bot.client.distube.on("addSong", (queue, song) => queue.textChannel.send(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}.`));
}
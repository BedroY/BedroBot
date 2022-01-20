module.exports = {
  name: "guildMemberAdd",
  run: async (bot, member) => {
    const generateImage = require('../generateImage.js');
    const welcomeChannelId = "609165167389048833";
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
  }
}

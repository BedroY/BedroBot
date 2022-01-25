module.exports = {
  name: "guildMemberAdd",
  run: async (bot, member) => {
    const generateImage = require("../generateImage.js");
    const welcomeChannelId = "345242129401905153";
    const img = await generateImage(member);
    member.guild.channels.cache.get(welcomeChannelId).send({
      content: `<@${member.id}> Welcome to the server!`,
      files: [img],
    });
  },
};

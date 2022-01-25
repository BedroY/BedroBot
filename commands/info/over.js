module.exports = {
  name: "over",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.channel.send(
      `${args} https://cdn.discordapp.com/attachments/813513486659092500/935600648811081748/1640877269100_1.mp4`
    );
  },
};

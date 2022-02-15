module.exports = {
  name: "back",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.channel.send(
      `${args} https://cdn.discordapp.com/attachments/609165167389048833/943057460044910602/video0.mov`
    );
  },
};

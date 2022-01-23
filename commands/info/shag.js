module.exports = {
  name: "shag",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async({client, message, args}) => {
    message.channel.send(`${args} shag`);
  }
}
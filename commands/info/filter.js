module.exports = {
  name: "filter",
  category: "music",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You must be in a voice channel to use this command."
      );

    await client.distube.setFilter(message, args[0]);
    message.channel.send(`Current queue filter: ${filter.join(", ") || "Off"}`);
  },
};

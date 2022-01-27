module.exports = {
  name: "stop",
  category: "music",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You must be in a voice channel to use this command."
      );

    await client.distube.stop(message);
  },
};

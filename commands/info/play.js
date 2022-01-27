module.exports = {
  name: "play",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You must be in a voice channel to use this command."
      );

    const music = args.join(" ");

    if (!music) {
      message.channel.send("Please provide a song!");
    }
    await client.distube.play(message, music);
  },
};

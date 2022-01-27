module.exports = {
  name: "queue",
  category: "music",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You must be in a voice channel to use this command."
      );

    const queue = client.distube.getQueue(message);

    await message.channel.send(
      `Current queue:\n${queue.songs
        .map(
          (song, id) =>
            `**${id ? id : "Playing"}**. ${song.name} - \`${
              song.formattedDuration
            }\``
        )
        .slice(0, 10)
        .join("\n")}`
    );
  },
};

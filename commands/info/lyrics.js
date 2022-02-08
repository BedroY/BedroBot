const ftl = require("findthelyrics");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lyrics",
  category: "music",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    if (args.length === 0) {
      message.channel.send("Please enter a song!");
    } else {
      ftl.find(args, function (err, resp) {
        if (!err) {
          console.log(resp);
          message.channel.send("No result! Please try again!");
        } else {
          console.log(err);
        }

        const exampleEmbed = new MessageEmbed()
          .setTitle(`${args} 🎱`)
          .setDescription(resp)
          .setTimestamp()
          .setFooter({
            text: "BedroBot",
            iconURL:
              "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png",
          });

        message.channel.send({ embeds: [exampleEmbed] });
      });
    }
  },
};

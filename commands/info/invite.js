const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  permissions: [],
  run: async ({ message }) => {
    const user = message.mentions.users.first() || message.author;
    const exampleEmbed = new MessageEmbed()

      .setThumbnail(
        "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png"
      )
      .setTitle(`Invite me to your server!`)
      .setFields({
        name: `Bot Invite:`,
        value: `[Click here](https://discord.com/oauth2/authorize?client_id=933432333057536091&scope=bot&permissions=27783077948)`,
        inline: true,
      })
      .setColor("#0099ff")
      .setTimestamp()
      .setFooter({
        text: "BedroBot",
        iconURL:
          "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png",
      });
    message.reply({ embeds: [exampleEmbed] });
  },
};

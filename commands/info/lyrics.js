const ftl = require("findthelyrics");
const { MessageEmbed } = require("discord.js");

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

module.exports = {
  name: "lyrics",
  category: "music",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    if (args.length === 0) {
      message.channel.send("Please enter a song!");
    } else {
      let q = args.join(" ");
      ftl.find(q, function (err, resp) {
        if (!err) {
          console.log(resp);

          let finalResult = titleCase(q);

          if (resp.length > 5000) {
            message.channel.send(
              "Lyrics unfortunetly too long, try a different song!"
            );
          } else {
            const exampleEmbed = new MessageEmbed()
              .setTitle(`${finalResult}`)
              .setDescription(resp)
              .setTimestamp()
              .setFooter({
                text: "BedroBot",
                iconURL:
                  "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png",
              });

            message.channel.send({ embeds: [exampleEmbed] });
          }
        } else {
          console.log(err);
          message.channel.send("No result! Please try again!");
        }
      });
    }
  },
};

const { default: axios } = require("axios");
const { MessageEmbed } = require("discord.js");

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

module.exports = {
  name: "album",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    let options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: { q: `${args}`, type: "multi", limit: "50" },
      headers: {
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
        "x-rapidapi-key": "84c826928bmsh6d536d2cf013686p18c992jsnce0a67a959bf",
      },
    };

    if (args.length === 0) {
      message.channel.send("Please enter an album!");
    } else {
      axios
        .request(options)
        .then(function (response) {
          let album = response.data.albums.items[0].data;
          let tracks = response.data.tracks.items[0].data;
          console.log(album.name);
          console.log(response.data.tracks.items[0].data);
          const { name, artists, coverArt, date } = album;

          const exampleEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${name}`)
            .setThumbnail(`${coverArt.sources[0].url}`)
            .addField("Artist 📺", ` ${artists.items[0].profile.name}`, true)
            .addField("Release Date ⏳ ", `${date.year}`, true)
            .setTimestamp()
            .setFooter({
              text: "BedroBot",
              iconURL:
                "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png",
            });
          let num = 0;
          for (let i = 0; i < response.data.tracks.items.length; i++) {
            if (
              response.data.tracks.items[i].data.albumOfTrack.name ===
              album.name
            ) {
              exampleEmbed.addField(
                `Track ${++num}`,
                `${
                  response.data.tracks.items[i].data.name
                } - ${millisToMinutesAndSeconds(
                  response.data.tracks.items[i].data.duration.totalMilliseconds
                )}`
              );
            }
          }

          message.reply({ embeds: [exampleEmbed] });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
};

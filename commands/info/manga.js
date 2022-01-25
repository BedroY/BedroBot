const { default: axios } = require("axios");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
require("dotenv").config();

module.exports = {
  name: "manga",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async function ({ client, message, args }) {
    let BASE_URL = `https://kitsu.io/api/edge/manga?filter[text]=${args.join(
      " "
    )}`;

    if (args[0] === "random") {
      const random = Math.floor(Math.random() * 9999);
      BASE_URL = `https://kitsu.io/api/edge/manga/?filter[id]=${random}`;
    } else {
      BASE_URL = `https://kitsu.io/api/edge/manga?filter[text]=${args.join(
        " "
      )}`;
    }

    if (args.length === 0) {
      message.channel.send("Please enter an anime!");
    } else {
      axios.get(BASE_URL).then(function (res) {
        if (res.data.data.length === 0) {
          message.channel.send(
            "No results! Try searching for a different anime!"
          );
        } else {
          const manga = res.data.data[0];
          let {
            canonicalTitle,
            synopsis,
            startDate,
            endDate,
            chapterCount,
            volumeCount,
            averageRating,
            ratingRank,
            status,
            subtype,
          } = manga.attributes;
          const genres = manga.relationships.genres.links.self;
          //console.log(movie);
          console.log(manga);

          if (endDate === null) {
            endDate = "continuing";
          }
          if ((chapterCount, volumeCount, averageRating, ratingRank === null)) {
            chapterCount = "N/A";
            volumeCount = "N/A";
            averageRating = "N/A";
            ratingRank = "N/A";
          }

          const exampleEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${canonicalTitle}`)
            .setThumbnail(`${manga.attributes.posterImage.medium}`)
            .setDescription(`${synopsis}`)
            .addField("Status ⏳ ", `${status}`, true)
            .addField("Type 📘", ` ${subtype}`, true)
            .addField(
              "Published 🖋️",
              `between **${startDate}** and ${endDate}`,
              true
            )
            .addField("Total Chapters 🌟", `${chapterCount}`, true)
            .addField("Volumes  📚", `${volumeCount}`, true)
            .addField("Average Rating ✨", `**${averageRating}/100**`, true)
            .addField("Rank 🏆", `**TOP ${ratingRank}**`, true)
            .setTimestamp()
            .setFooter({
              text: "BedroBot",
              iconURL:
                "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png",
            });

          message.reply({ embeds: [exampleEmbed] });
        }
      });
    }
  },
};

const api = require("novelcovid");
const { MessageEmbed } = require("discord.js");
const { millify } = require("millify");

module.exports = {
  name: "covid",
  permissions: [],
  run: async ({ client, message, args }) => {
    api.settings({
      baseUrl: "https://disease.sh",
    });

    if (args.length === 0) {
      message.channel.send("Please enter a country!");
    } else {
      api.countries({ country: `${args}` }).then(function (res) {
        if (res.message) {
          message.channel.send("Please try again with a different country");
        } else {
          console.log(res);

          const {
            country,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active,
            activePerOneMillion,
          } = res;

          const exampleEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${country}`)
            .setThumbnail(`${res.countryInfo.flag}`)
            .addField("Total cases", `${millify(cases)}`, true)
            .addField("Total deaths", `${millify(deaths)}`, true)
            .addField("Total recovered", `${millify(recovered)}`, true)
            .addField("Daily cases", `+${millify(todayCases)}`, true)
            .addField("Daily recovered", `+${millify(todayRecovered)}`, true)
            .addField("Daily deaths", `+${millify(todayDeaths)}`, true)
            .addField("Active cases", `${millify(active)}`, true)
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

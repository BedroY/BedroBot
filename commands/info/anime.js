const { default: axios } = require('axios') 
const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js');
require("dotenv").config();

module.exports = {
    name: "anime",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async function({client, message, args})  {
    const BASE_URL = `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`;
    
    if(args.length === 0){
          message.channel.send("Please enter an anime!");
        } else {
      axios.get(BASE_URL).then(function (res) {
       if(res.data.data.length === 0){
         message.channel.send("No results! Try searching for a different anime!");
       } else {
         
      const movie = res.data.data[0];
      const {canonicalTitle, synopsis, startDate, endDate, episodeCount, episodeLength, averageRating, ratingRank, status, subtype} = movie.attributes;
      const genres = movie.relationships.genres.links.self;
      //console.log(movie);
      console.log(movie.attributes);

        const exampleEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${canonicalTitle}`)
        .setThumbnail(`${movie.attributes.posterImage.medium}`)
        .setDescription(`${synopsis}`)
        .addField('Status ⏳ ',`${status}`, true)
        .addField('Type 📺',` ${subtype}`, true)
        .addField('Aired 📅', `from **${startDate}** to **${endDate}**`, true)
        .addField('Total Episodes 🌟', `${episodeCount}`, true)
        .addField('Duration  ⏱️',`${episodeLength} mins`, true)
        .addField('Average Rating ✨',`**${averageRating}/100**`, true)
        .addField('Rank 🏆',`**TOP ${ratingRank}**`, true)

  
         message.reply({ embeds: [exampleEmbed] });
      }
    })
  }
}}
const { default: axios } = require('axios') 
const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js');
require("dotenv").config();

module.exports = {
    name: "films",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async function({client, message, args})  {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = `?api_key=${process.env.FILM_API_KEY}`;
    const SEARCH = '/search/movie';
    const QUERY = `&query=${args.join('%20')}`
    const API_URL = BASE_URL + SEARCH + API_KEY + QUERY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    
    
    if(args.length === 0){
          message.channel.send("Please enter a film!");
        } else {
      axios.get(API_URL).then(function (res) {
       if(res.data.results.length === 0){
         message.channel.send("No results! Try searching for a different film!");
       } else {
         
      const movie = res.data.results[0];
      const {title, overview, release_date, vote_average, vote_count, poster_path} = movie;
      console.log(title);
      console.log(args)

        const exampleEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${title}`)
        .setThumbnail(`${IMG_URL}${poster_path}`)
        .setDescription(`**${overview}**`)
        .addField('Release Date 📅', `${release_date}`, true)
        .addField('Rating 🌟', `${vote_average}`, true)
        .addField('Amount of Ratings ✨',`${vote_count}`, true)
  
         message.reply({ embeds: [exampleEmbed] });
      }
    })
  }
}}
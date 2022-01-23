const { default: axios } = require('axios') 
const Discord = require('discord.js')

module.exports = {
    name: "meme",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async function({client, message, args})  {
        let subreddit = ['me_irl', 'THE_PACK'];
        let random = Math.floor(Math.random() * subreddit.length);
        let memeReddit = subreddit[random];
        axios.get(`https://meme-api.herokuapp.com/gimme/${memeReddit}`).then(function (res) {
            console.log(res)
            const meme = res.data;
            message.channel.send(meme.url)
    })
}}
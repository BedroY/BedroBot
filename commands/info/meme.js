const { default: axios } = require('axios') 
const Discord = require('discord.js')

module.exports = {
    name: "meme",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async function({client, message, args})  {
        axios.get(`https://meme-api.herokuapp.com/gimme/me_irl`).then(function (res) {
            console.log(res)
            const pack = res.data;
            message.channel.send(pack.url)
    })
}}
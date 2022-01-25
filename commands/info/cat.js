const { default: axios } = require("axios");
const Discord = require("discord.js");

module.exports = {
  name: "cat",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async function ({ client, message, args }) {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then(function (res) {
        console.log(res);
        const [cat] = res.data;
        message.channel.send(cat.url);
      });
  },
};

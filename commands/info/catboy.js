const { default: axios } = require("axios");
const Discord = require("discord.js");

module.exports = {
  name: "catboy",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async function ({ client, message, args }) {
    axios.get("https://api.catboys.com/img/catboy").then(function (res) {
      console.log(res);
      const pack = res.data;
      message.channel.send(pack.url);
    });
  },
};

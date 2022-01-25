const { default: axios } = require("axios");
const Discord = require("discord.js");

module.exports = {
  name: "dog",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async function ({ client, message, args }) {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(function (res) {
      const dog = res.data;
      message.channel.send(dog.message);
    });
  },
};

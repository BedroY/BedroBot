module.exports = {
  name: "stfu",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async({client, message, args}) => {
    const stfuImgs = ['https://cdn.discordapp.com/attachments/609165167389048833/934928366312779876/Screenshot_20220121-211234.png', 'https://media.discordapp.net/attachments/609165167389048833/933820103076753428/image0-15-3.gif'];
    const random = Math.floor(Math.random() * stfuImgs.length);
    message.channel.send(`${args} ${stfuImgs[random]}`);
  }
}
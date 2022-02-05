const { Leaftictactoe } = require("leaf-utils");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ttt",
  category: "fun",
  timeout: "5000",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const inv = new MessageEmbed()
      .setColor("#E74C3C")
      .setTitle("Invalid\n")
      .setDescription("Please provide a user to challenge")
      .setTimestamp()
      .setFooter({
        text: "BedroBot",
        iconURL:
          "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png",
      });

    // const erro = new MessageEmbed()
    // .setColor('#E74C3C')
    // .setTitle('Error\n')
    // .setDescription('Please specify valid content')
    // .setTimestamp()
    // .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

    let opponent = message.mentions.members.first();
    if (!opponent) return message.channel.send({ embeds: [inv] });

    new Leaftictactoe({
      message: message,
      opponent: message.mentions.users.first(),
      embed: {
        title: "Tic Tac Toe",
        color: "#57F287",
      },
      oEmoji: "🔵",
      xEmoji: "❌",
      oColor: "PRIMARY",
      xColor: "DANGER",
      turnMessage: "{emoji} | Its now **{player}** turn!",
      waitMessage: "Waiting for the opponent...",
      askMessage:
        "Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!",
      cancelMessage:
        "Looks like they refused to have a game of Tic Tac Toe. :(",
      timeEndMessage: "Since the opponent didnt answer, i dropped the game!",
      drawMessage: "It was a draw!",
      winMessage: "{emoji} | **{winner}** won the game!",
      gameEndMessage: "The game went unfinished",
    }).startGame();
  },
};

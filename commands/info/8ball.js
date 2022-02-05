const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  category: "fun",
  permissions: [],
  devOnly: false,
  run: async ({ bot, message, args }) => {
    if (!args[0]) return message.reply("Ask a question");
    let replies = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definetly.",
      "You may rely on it.",
      "As i see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
    ];

    let result = Math.floor(Math.random() * replies.length);
    let question = args.slice().join(" ");

    const exampleEmbed = new MessageEmbed()
      .setTitle(`${message.author.username} 🎱`)
      .setColor("RANDOM")
      .addField("Question", question)
      .setTimestamp()
      .setFooter({
        text: "BedroBot",
        iconURL:
          "https://cdn.discordapp.com/attachments/634648075809325075/935627937993076776/Allmight.png",
      });

    if (message.author.id === "178924031829868545") {
      const random = Math.floor(Math.random() * 10);
      exampleEmbed.addField("Answer", replies[random]);
    } else {
      exampleEmbed.addField("Answer", replies[result]);
    }

    message.channel.send({ embeds: [exampleEmbed] });
  },
};

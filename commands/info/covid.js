const api = require('novelcovid');
const {MessageEmbed} = require('discord.js');

module.exports = {
  name: 'covid',
  permissions:[],
  run: async ({client, message, args}) => {
    api.settings({
      baseUrl: 'https://disease.sh'
  });

  if(args.length === 0){
    message.channel.send("Please enter a country!");
  } else {
  api.countries({country:`${args}`}).then(function(res) {
    if(res.message){
      message.channel.send('Please try again with a different country');
    } else {
    
      console.log(res);

    const {country, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered,  active} = res;

    

    const exampleEmbed = new MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(`${country}`)
          .setThumbnail(`${res.countryInfo.flag}`)
          .addField('Total cases',`${cases}`, true)
          .addField('Total deaths',`${deaths}`, true)
          .addField('Total recovered',`${recovered}`, true)
          .addField('Daily cases',`+${todayCases}`, true)
          .addField('Daily recovered', `+${todayRecovered}`, true)
          .addField('Daily deaths', `+${todayDeaths}`, true)
          .addField('Active cases',`${active}`, true)
  
    
           message.reply({ embeds: [exampleEmbed] });
          }
      });
  }
}
}
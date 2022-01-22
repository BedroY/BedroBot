module.exports = {
  name: 'ping',
  permissions:[],
  run: async ({bot, message, client}) => {
      const msg = await message.channel.send('Pinging...')
      msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
  }
}
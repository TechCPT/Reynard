const Client = require('../client/Client');
const { Message } = require('discord.js');
module.exports = {
	name: 'ping',
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = await message.channel.send('Pinging..');
		await msg.edit(`Pong!\nClient Websocket ping is: ${client.ws.ping} ms!\nMessage edit ping is: ${msg.createdAt - message.createdAt} ms!`);
	},
	aliases: ['latency'],
};
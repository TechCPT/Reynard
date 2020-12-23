const Client = require('../client/Client');
const { Message } = require('discord.js');
module.exports = {
	name: 'help',
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = message.channel.send(`
            Help commands coming soon!
        `);
	},
};
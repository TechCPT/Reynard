const Client = require('../structures/Client');
const { Message, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = message.channel.send(
			new MessageEmbed()
				.setTitle('Reynard HELP')
				.setColor('ORANGE')
				.setDescription('Reynard is a multipurpose Discord bot built with Node.js.')
				.addField('Reynard Official Discord', 'https://discord.gg/heHzCu3mx8')
				.addField('List of Reynard Bot Commands', '!commands — COMING SOON!')
				.setFooter('© 2020 Reynard | Visit the Reynard Official Discord server for more information!'),
		);
	},
};
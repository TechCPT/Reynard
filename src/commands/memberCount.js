const Client = require("../handlers/Client");
const { Message, MessageEmbed, Constants } = require("discord.js");

module.exports = {
	name: "membercount",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const { guild } = message;


		const msg = message.channel.send(
			new MessageEmbed()
				.setColor("ORANGE")
				.addFields(
					{ name: "Members", value: message.guild.memberCount, inline: true },
					{ name: "Humans", value: message.guild.members.cache.filter(m => !m.user.bot).size, inline: true },
					{ name: "Bots", value: message.guild.members.cache.filter(m => m.user.bot).size, inline: true },
				)
				.setTimestamp(`${new Date()}`),
		);
	},
	aliases: ["members"],
};
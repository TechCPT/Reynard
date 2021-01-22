const Client = require("../handlers/Client");
const { Message, MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
	name: "test",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = message.channel.send(
			new MessageEmbed()
				.setTitle("Reynard TEST Command")
				.setColor("ORANGE")
				.setDescription(stripIndents`
                    Owner: xxDeon#5650
					`,
				)
				.setFooter(`© 2020 Reynard | Requested by ${message.author.tag}`),
		);
	},
	aliases: ["hello"],
};
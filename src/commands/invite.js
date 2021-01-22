const Client = require("../handlers/Client");
const { Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "invite",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = message.channel.send(
			new MessageEmbed()
				.setTitle("Invite Reynard to your server!")
				.setColor("ORANGE")
				.setDescription("https://discord.com/api/oauth2/authorize?client_id=801966643626377216&permissions=8&scope=bot")
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true })),
		);
	},
};


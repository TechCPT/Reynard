const Client = require("../handlers/Client");
const { Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "avatar",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {

		const member = message.mentions.users.first() || message.author;

		const avatar = member.displayAvatarURL({ dynamic: true, size: 1024 });

		const msg = message.channel.send(
			new MessageEmbed()
				.setAuthor(`${message.author.tag}`, member.displayAvatarURL({ format: "png", dynamic: true }))
				.setTitle("Avatar")
				.setColor("ORANGE")
				.setImage(avatar),
		);
	},
};
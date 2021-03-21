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

		const user = message.mentions.users.first() || message.author;

		const avatar = user.displayAvatarURL({ dynamic: true, size: 256 });

		const msg = message.channel.send(
			new MessageEmbed()
				.setAuthor(`${user.tag}`, user.displayAvatarURL({ format: "png", dynamic: true }))
				.setTitle("Avatar")
				.setColor("ORANGE")
				.setImage(avatar),
		);
	},
	aliases: ["av"],
};
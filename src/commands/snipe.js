const Client = require("../handlers/Client");
const { Message, MessageEmbed, DiscordAPIError } = require("discord.js");

module.exports = {
	name: "snipe",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = client.snipes.get(message.channel.id);
		if(!msg) return message.channel.send("There are no deleted messages in this channel!");
		const embed = new MessageEmbed()
			.setColor("ORANGE")
			.setAuthor(msg.author, msg.author.displayAvatarURL({ format: "png", dynamic: true }))
			.setDescription(msg.content)
			.setFooter(`Requested by ${message.author.tag} | ${client.user.username}`)
			.setTimestamp();
		if(msg.image)embed.setImage(msg.image);

		message.channel.send(embed);
	},
};


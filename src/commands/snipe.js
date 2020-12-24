const Client = require("../structures/Client");
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
		const embed = new Discord.MessageEmbed()
			.setAuthor(msg.author)
			.setDescription(msg.content);
		if(msg.image)embed.setImage(msg.image);

		message.channel.send(embed);
	},
};


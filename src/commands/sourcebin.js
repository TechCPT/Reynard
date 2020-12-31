const Client = require("../handlers/Client");
const { Message } = require("discord.js");
const sourcebin = require("sourcebin");

module.exports = {
	name: "sourcebin",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const newsource = await sourcebin.create([
			{
				name: "sourcebin",
				content: msg.content,
				languageId: "text",
			},
		], {
			title: `Sourcebin created by ${message.author.tag}`,
			description: "Here's my code!",
		}).then(console.log)
			.catch(console.error);

		console.log(newsource);

		if(!args.length) return message.channel.send("You have to give me something to put in a sourcebin...");

		await sourcebin.get(newsource.id)
			.then(console.log)
			.catch(console.error);

		const shortLink = sourcebin.shorten(newsource.id);

		const embed = new MessageEmbed()
			.setColor("ORANGE")
			.setAuthor(message.author.displayAvatarURL({ format: "png", dynamic: true }), msg.author)
			.setDescription("Here's your link:" + shortLink)
			.setFooter(`Thanks for using ${client.user.username}!`)
			.setTimestamp();

		message.channel.send(embed);
	},
};
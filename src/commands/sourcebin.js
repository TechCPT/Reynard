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
		sourcebin.create([
			{
				name: "sourcebin",
				content: "This bin was made using npmjs.org/sourcebin",
				languageId: "text",
			},
		], {
			title: "Hello World!",
			description: "My test sourcebin",
		}).then(console.log)
			.catch(console.error);

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
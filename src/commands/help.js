const Client = require("../structures/Client");
const { Message, MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
	name: "help",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = message.channel.send(
			new MessageEmbed()
				.setTitle("Reynard HELP")
				.setColor("ORANGE")
				.setDescription(stripIndents`
					Reynard is a multipurpose Discord bot built with Node.js.
					
					Reynard Official Discord — https://discord.gg/heHzCu3mx8
					
					**List of Reynard Bot Commands**
					\`r!commands\` — COMING SOON!
					\`r!delete\` [# of messages] - Deletes the inputted amount of messages along with the command used.
					\`r!ping\` - Shows the bot's current ping.
					\`r!snipe\` - Reveals the most recently deleted message.
					`,
				)
				.setFooter("© 2020 Reynard | Visit the Reynard Official Discord server for more information!"),
		);
	},
};


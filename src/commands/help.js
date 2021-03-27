const Client = require("../handlers/Client");
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
				.setAuthor(client.user.tag, client.user.displayAvatarURL({ format: "png", dynamic: true }))
				.setTitle("**Prefix:** `r!`")
				.setColor("ORANGE")
				.setDescription(stripIndents`
					Reynard is a multipurpose Discord bot built with Node.js.

					Reynard currently has **9** public commands available!

					Reynard Official Discord — https://discord.gg/heHzCu3mx8
					
					**List of Reynard Bot Commands**
					\`r!avatar\` — Displays the avatar image of a user.
					\`r!commands\` – COMING SOON!
					\`r!delete [# of messages]\` – Deletes the inputted amount of messages along with the command used.
					\`r!help\` — Displays information about the bot.
					\`r!invite\` — Reynard's invite link.
					\`r!membercount\` — Displays the membercount of the current server.
					\`r!ping\` – Shows the bot's current ping.
					\`r!serverinfo\` — Displays information on the current server.
					\`r!snipe\` – Reveals the most recently deleted message.
					`,
				)
				.setFooter("© 2021 Reynard")
				.setTimestamp(`${new Date()}`),
		);
	},
};


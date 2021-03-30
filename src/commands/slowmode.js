const Client = require("../handlers/Client");

module.exports = {
	name: "slowmode",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		if (!args[0]) {
			message.channel.setRateLimitPerUser(0);
			return message.channel.send(
				"Reset the slowmode of this channel!",
			);
		}
		if (isNaN(args[0])) {
			return message.channel.send(
				"Please specify the time in seconds to set this channel's slowmode to!",
			);
		}
		message.channel.setRateLimitPerUser(args[0]);
		message.channel.send(
			`Set the slowmode of this channel to **${args[0]}**!`,
		);
	},
	aliases: ["slow"],
};
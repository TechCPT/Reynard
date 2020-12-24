const Client = require("../structures/Client");
const { Message } = require("discord.js");

module.exports = {
	name: "delete",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		message.channel.bulkDelete(args);
	},
	aliases: ["del", "purge"],
};
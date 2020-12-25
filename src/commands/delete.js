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
		message.channel.bulkDelete(args).then(() => {
			message.channel.send("Deleted" + args[0] + "messages.");
		  });
	},
	aliases: ["del", "purge"],
};
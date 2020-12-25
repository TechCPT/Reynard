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
		message.channel.bulkDelete(2).then(() => {
			message.channel.send("Deleted 2 messages.").then(msg => msg.delete(3000));
		  });
	},
	aliases: ["del", "purge"],
};
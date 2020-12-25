const Client = require("../structures/Client");
const { Message } = require("discord.js");

module.exports = {
	name: "delete",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args[0]) => {
		message.channel.bulkDelete(args).then(() => {
			message.channel.send("Deleted" + args[] + "messages.").then(msg => msg.delete(3000));
		  });
	},
	aliases: ["del", "purge"],
};
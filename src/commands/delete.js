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
		if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Lack of permissions!");
		let deleteAmount;

		if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
			message.reply("Please input a valid amount.");
		}

		if(parseInt(args[0]) > 100) {
			message.reply("You can only delete 100 messages at a time!");
		}
		else {
			deleteAmount = parseInt(args[0]);
		}

		message.channel.bulkDelete(deleteAmount + 1, true).then(async () => {
			await message.channel.send(`Deleted **${deleteAmount}** messages!`).then(m => m.delete({ timeout: 5000 }));
		});
	},
	aliases: ["del", "purge", "clear"],
};
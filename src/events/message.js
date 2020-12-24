const Client = require("../structures/Client");
const { Message } = require("discord.js");
module.exports = {
	name: "message",
	/**
     * @param {Message} message
     * @param {Client} client
     */
	run: async (client, message) => {
		// console.log(`${client.user.tag} received the message ${message.content}!`);
		if(message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(client.prefix.toLowerCase())) return;
		const [ cmd, ...args ] = message.content.slice(client.prefix.length).trim().split(/ +/g);
		const command = client.getCommand(cmd.toLowerCase());
		if(!command) return;
		command.run(client, message, args).catch(console.error);
	},
};
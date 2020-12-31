const Client = require("../handlers/Client");
const { Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "ping",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		const msg = await message.channel.send("Pinging..");
		await msg.edit(client.embed({
			title: "Pong!",
			description: `Client Websocket ping is: ${client.ws.ping} ms!\nMessage edit ping is: ${msg.createdAt - message.createdAt} ms!`,
		}, message));
		await msg.edit("");
	},
	aliases: ["latency"],
};
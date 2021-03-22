const Client = require("../handlers/Client");
const { Message, MessageEmbed } = require("discord.js");

const dayjs = require("dayjs");

module.exports = {
	name: "guilds",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		if(message.author.id !== "494632582328221718") return message.channel.send("Lack of permissions!");

		client.guilds.cache.forEach((guild) => {

			const { createdAt, id, memberCount, name, owner, region } = guild;

			const icon = guild.iconURL();

			const channels = message.guild.channels.cache.filter(m => m.type === "category").size;
			const roles = message.guild.roles.cache.size;

			const textChannels = message.guild.channels.cache.filter(m => m.type === "text").size;
			const voiceChannels = message.guild.channels.cache.filter(m => m.type === "voice").size;

			const dateCreated = dayjs(createdAt).format("MM/DD/YYYY");

			const msg = message.channel.send(
				new MessageEmbed()
					.setAuthor(name, guild.iconURL({ format: "png", dynamic: true }))
					.setThumbnail(icon)
					.setColor("ORANGE")
					.addFields(
						{
							name: "Owner",
							value: owner,
							inline: true,
						},
						{
							name: "Region",
							value: region,
							inline: true,
						},
						{
							name: "Channel Categories",
							value: channels,
							inline: true,
						},
						{
							name: "Text Channels",

							value: textChannels,
							inline: true,
						},
						{
							name: "Voice Channels",
							value: voiceChannels,
							inline: true,
						},
						{
							name: "Members",
							value: memberCount,
							inline: true,
						},
						{
							name: "Roles",
							value: roles,
						},
					)
					.setFooter(`ID: ${id} • Server Created: ${dateCreated}`),
			);
		});
	},
	aliases: ["g"],
};
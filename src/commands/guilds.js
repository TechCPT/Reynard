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

		if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Lack of permissions!");

		client.guilds.cache.forEach((guild) => {

			const { channelCount, createdAt, id, memberCount, name, owner, region, roles } = guild;

			const icon = guild.iconURL();

			const dateCreated = dayjs(guild.createdAt).format("YYYY-MM-DD");

			const textChannels = message.guild.channels.cache.filter(m => m.type === "text").size;
			const voiceChannels = message.guild.channels.cache.filter(m => m.type === "voice").size;

			const msg = message.channel.send(
				new MessageEmbed()
					.setAuthor(`${guild.name}`, guild.iconURL({ format: "png", dynamic: true }))
					.setThumbnail(icon)
					.setColor("ORANGE")
					.addFields(
						{
							name: "Owner",
							value: `${guild.owner.user.tag}`,
							inline: true,
						},
						{
							name: "Region",
							value: `${guild.region}`,
							inline: true,
						},
						{
							name: "Channel Categories",
							value: `${guild.channelCount}`,
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
							value: `${guild.memberCount}`,
							inline: true,
						},
						{
							name: "Roles",
							value: `${guild.roles}`,
						},
					)
					.setFooter(`ID: ${guild.id} • Server Created: ${dateCreated}`),
			);
		});
	},
	aliases: ["g"],
};
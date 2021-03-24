const Client = require("../handlers/Client");
const { Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "guildleave",
	/**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
	run: async (client, message, args) => {
		if(message.author.id !== "494632582328221718") return message.channel.send("Lack of permissions!");

		const { id, name } = message.guild;

		client.guilds.cache.get(id).leave().catch(err => {
			console.log(`There was an error leaving the guild: \n ${err.message}`);

			const msg = message.channel.send(
				new MessageEmbed()
					.setAuthor(name, guild.iconURL({ format: "png", dynamic: true }))
					.setDescription(`Successfully left ${name}!`)
					.setThumbnail(icon)
					.setColor("ORANGE")
					.setFooter(`ID: ${id}`)
					.setTimestamp(`${new Date()}`),
			);
		});
	},
	aliases: ["gleave"],
};
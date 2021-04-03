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

		const id = args[0];

		if(!id) return message.channel.send("You must specify a guild id to leave!");

		client.guilds.cache.get(id).leave()
			.then(guild => {
				const icon = guild.iconURL();

				message.channel.send(
					new MessageEmbed()
						.setAuthor(guild.name, guild.iconURL({ format: "png", dynamic: true }))
						.setDescription(`Successfully left ${guild.name}!`)
						.setThumbnail(icon)
						.setColor("ORANGE")
						.setFooter(`ID: ${id}`)
						.setTimestamp(`${new Date()}`),
				);
			})
			.catch(err => console.log(`There was an error leaving the guild: \n ${err}`));

	},
	aliases: ["gleave"],
};
const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { normalize, join } = require("path");

class ReynardClient extends Client {
	constructor() {
		super({ messageSweepInterval: 180, messageCacheLifetime: 180, messageCacheMaxSize: 200, ws: { intents: Intents.ALL } });
		super({ disableEveryone:true });
		this.commands = new Collection();
		this.aliases = new Collection();
		this.events = new Collection();
		this.prefix = "r!";

		this.snipes = new Map();
		this.on("messageDelete", function(message, channel) {
			this.snipes.set(message.channel.id, {
				content: message.content,
				author: message.author.tag,
				image: message.attachments.first() ? message.attachments.first().proxyURL : null,
			});
		});

	}
	getCommand(cmd) {
		return this.commands.get(cmd) || this.commands.get(this.aliases.get(cmd));
	}

	start(token, cmdPath, eventPath) {
		this.login(token);

		this.on("ready", () => {
			this.user.setPresence({
				status: "online",
				activity: {
					name: "Discord API",
					type: "WATCHING",
				},
			});
		});

		readdirSync(join(process.cwd(), "src", cmdPath)).map((data) => {
			const file = require(join(process.cwd(), "src", cmdPath, data));
			this.commands.set(file.name, file);
			if(file.aliases) file.aliases.map((alias) => this.aliases.set(alias, file.name));
		});

		readdirSync(join(process.cwd(), "src", eventPath)).map((data) => {
			const file = require(join(process.cwd(), "src", eventPath, data));
			this.events.set(file.name, file);
			this.on(file.name, file.run.bind(null, this));
		});
	}
	embed(options, message) {
		if (!message.guild.me.permissions.has("EMBED_LINKS")) return message.channel.send("Must have EMBED LINKS permission!");
		return new MessageEmbed({ ...options, color: "ORANGE" }).setFooter(
			`Requested by ${message.author.tag} | ${this.user.username}`,
			message.author.displayAvatarURL({ format: "png", dynamic: true }),
		).setTimestamp()
		;
	}
}
module.exports = ReynardClient;
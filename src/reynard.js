const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv-flow').config();

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
	if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

	if (message.content.startsWith (process.env.PREFIX + 'myping')) {
		message.channel.send('Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
	}

	if (message.content === `${process.env.PREFIX}serverinfo`) {
		message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
	}

	if (message.content === `${process.env.PREFIX}userinfo`) {
		message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id}`);
	}

	if (message.content.startsWith (process.env.PREFIX + 'info')) {
		message.reply ('Hey there! I\'m Reynard, a Discord bot created with Node.js.');
	}
	if (message.content == process.env.PREFIX + 'hello') {
		message.channel.send('Hey!');
	}
});


client.login(process.env.BOT_TOKEN);
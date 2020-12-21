require('dotenv-flow').config();
const Client = require('./client/Client');
new Client().start(process.env.BOT_TOKEN, './commands', './events');

Client.on('ready', () => {
	Client.user.setPresence({
		game: {
			name: 'Discord API',
			type: 'WATCHING',
		},
		status: 'dnd',
	});
});
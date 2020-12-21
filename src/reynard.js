require('dotenv-flow').config();
const Client = require('./client/Client');
new Client().start(process.env.BOT_TOKEN, './commands', './events');

client.on('ready', () => {
	client.user.setPresence({
		game: {
			name: 'my code',
			type: 'WATCHING',
		},
		status: 'idle',
	});
});
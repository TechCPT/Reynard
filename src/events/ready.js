const Client = require("../handlers/Client");
module.exports = {
	name: "ready",
	/**
     * @param {Client} client
     */
	run: async (client) => {
		console.log(`Logged in as ${client.user.tag}!`);
	},
};
require("dotenv-flow").config();
const Client = require("./structures/Client");
new Client().start(process.env.BOT_TOKEN, "./commands", "./events");
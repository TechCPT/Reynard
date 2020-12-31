require("dotenv-flow").config();
const Client = require("./handlers/Client");
new Client().start(process.env.BOT_TOKEN, "./commands", "./events");
const { createClient } = require("redis");
require("dotenv").config();

const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_HOST_PORT = process.env.REDIS_HOST_PORT;

let client;

const MODE = process.env.MODE;

if (MODE == "DEVELOPMENT") {
  console.log("inside development");

  client = createClient("redis://fv-redis:6379");
}

if (MODE == "PRODUCTION") {
  client = createClient({
    password: REDIS_PASSWORD,
    legacyMode: false,
    socket: {
      connectTimeout: 10000,
      host: REDIS_HOST,
      port: REDIS_HOST_PORT,
    },
  });
}

module.exports = client;

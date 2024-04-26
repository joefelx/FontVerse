const { createClient } = require("redis");
require("dotenv").config();

const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_HOST_PORT = process.env.REDIS_HOST_PORT;

let client;

if (process.env.DEVELOPMENT) {
  client = createClient(6379, "127.0.0.1");
} else {
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

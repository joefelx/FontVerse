const { createClient } = require("redis");

const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_HOST_PORT = process.env.REDIS_HOST_PORT;

const client = createClient({
  password: REDIS_PASSWORD,
  legacyMode: false,
  socket: {
    connectTimeout: 10000,
    host: REDIS_HOST,
    port: REDIS_HOST_PORT,
  },
});

module.exports = client;

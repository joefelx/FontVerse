const { createClient } = require("redis");
const {
  REDIS_URL,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_HOST_PORT,
  MODE,
} = require("../utils/constEnv");

let client;

if (MODE === "DEVELOPMENT") {
  client = createClient(REDIS_URL);
}

if (MODE === "PRODUCTION") {
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

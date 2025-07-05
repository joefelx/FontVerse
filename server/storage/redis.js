const { createClient } = require("redis");
const {
  REDIS_URL,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_HOST_PORT,
  MODE,
} = require("../utils/constEnv");

let client = null;

if (MODE === "DEVELOPMENT") {
  client = createClient(REDIS_URL);
} else if (MODE === "PRODUCTION") {
  try {
    client = createClient({
      password: REDIS_PASSWORD,
      legacyMode: false,
      socket: {
        connectTimeout: 10000,
        host: REDIS_HOST,
        port: REDIS_HOST_PORT,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = client;

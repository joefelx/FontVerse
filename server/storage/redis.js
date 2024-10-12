const { createClient } = require("redis");
const {
  REDIS_URL,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_HOST_PORT,
} = require("../utils/constEnv");
require("dotenv").config();

class RedisClient {
  async connect(MODE) {
    let connection;
    try {
      if (MODE === "DEVELOPMENT") {
        connection = createClient(REDIS_URL);
      }

      if (MODE === "PRODUCTION") {
        connection = createClient({
          password: REDIS_PASSWORD,
          legacyMode: false,
          socket: {
            connectTimeout: 10000,
            host: REDIS_HOST,
            port: REDIS_HOST_PORT,
          },
        });
      }
    } catch (error) {
      console.log("Unable to Connect, trying in new seconds..");
    } finally {
      await connection.connect();
      return Promise.resolve();
    }
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;

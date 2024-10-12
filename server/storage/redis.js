const { createClient } = require("redis");
const {
  REDIS_URL,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_HOST_PORT,
} = require("../utils/constEnv");
require("dotenv").config();

class RedisClient {
  connection = null;
  async connect(MODE) {
    try {
      if (MODE === "DEVELOPMENT") {
        this.connection = createClient(REDIS_URL);
      }

      if (MODE === "PRODUCTION") {
        this.connection = createClient({
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
      await this.connection.connect();
      return Promise.resolve();
    }
  }

  getClient() {
    return this.connection;
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;

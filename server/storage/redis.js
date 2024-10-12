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

      await this.connection.connect().then(() => {
        return Promise.resolve();
      });
    } catch (error) {
      console.log("Unable to Connect, trying in new seconds..");
    }
  }

  getClient() {
    if (this.connection !== null) {
      return this.connection;
    }
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;

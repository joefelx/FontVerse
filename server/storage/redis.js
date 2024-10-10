const { createClient } = require("redis");
require("dotenv").config();

const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_HOST_PORT = process.env.REDIS_HOST_PORT;

const MODE = process.env.MODE;
const REDIS_URL = process.env.REDIS_URL;

class RedisClient {
  async connect(MODE) {
    let connection;
    try {
      if (MODE == "DEVELOPMENT") {
        connection = createClient(REDIS_URL);
      }

      if (MODE == "PRODUCTION") {
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

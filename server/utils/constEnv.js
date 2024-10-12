require("dotenv").config();

const env = {
  PORT: process.env.PORT || 5000,
  CLIENT_URL: process.env.CLIENT_URL,
  SERVER_URL: process.env.SERVER_URL,
  FONTCDN: process.env.AWS_FONTCDN,

  MONGO_URI: process.env.MONGO_URI,

  MODE: process.env.MODE,

  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESSKEY_ID: process.env.AWS_ACCESSKEY_ID,
  AWS_SECRET_ACCESSKEY: process.env.AWS_SECRET_ACCESSKEY,
  AWS_SERVER_URL: process.env.AWS_SERVER_URL,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,

  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_HOST_PORT: process.env.REDIS_HOST_PORT,
  REDIS_URL: process.env.REDIS_URL,
};

module.exports = env;

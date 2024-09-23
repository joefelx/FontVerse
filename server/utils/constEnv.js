require("dotenv").config();

const env = {
  CLIENT_URL: process.env.CLIENT_URL,
  SERVER_URL: process.env.SERVER_URL,
  FONTCDN: process.env.AWS_FONTCDN,
  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESSKEY_ID: process.env.AWS_ACCESSKEY_ID,
  AWS_SECRET_ACCESSKEY: process.env.AWS_SECRET_ACCESSKEY,
  AWS_SERVER_URL: process.env.AWS_SERVER_URL,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
};

module.exports = env;

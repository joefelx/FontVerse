const redisClient = require("../storage/redis");

async function getCache(path) {
  if (redisClient == null) {
    console.log("No redis found");
    return null;
  }

  const fonts = await redisClient.get(path);

  return fonts;
}

function setCache(path, formatString) {
  if (redisClient == null) {
    console.log("No redis found");
    return null;
  }

  redisClient.set(path, formatString);
}

module.exports = { getCache, setCache };

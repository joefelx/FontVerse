const { getCache } = require("../utils/cacheManager");

async function redisCache(req, res, next) {
  const path = req.path + req.url;

  const fonts = await getCache(path);

  if (fonts != null) {
    return res.status(200).format({
      "text/css": async function () {
        res.send(fonts);
      },
    });
  }

  req.cacheKey = path;
  next();
}

module.exports = redisCache;

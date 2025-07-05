const router = require("express").Router();

const User = require("../model/User");
const Font = require("../model/Font");

const upload = require("../storage/multer");
const renderStyle = require("../utils/renderStyle");
const redisClient = require("../storage/redis");
const isAdmin = require("../middleware/isAdmin");

const env = require("../utils/constEnv");
const redisCache = require("../middleware/redisCache");
const { setCache } = require("../utils/cacheManager");

// store new font in db
router.post("/new", isAdmin, upload.single("font"), async (req, res) => {
  try {
    const file = req.file;
    const body = req.body;

    const fontFound = await Font.findOne({
      fontSlug: body.fontSlug,
    });

    if (fontFound) {
      const newFontWeight = {
        fontWeight: body.fontWeight,
        fontURL: `${env.SERVER_URL}/fonts/${file.filename}`,
      };

      fontFound.fontWeights.push(newFontWeight);

      await fontFound.save();

      return res.status(200).json({
        status: "success",
        data: "fontSaved",
      });
    }

    const fontRefactor = {
      userId: req.userId,
      fontName: body.fontName,
      fontSlug: body.fontSlug,
      fontDetails: body.fontDetails,
      fontWeights: {
        fontWeight: body.fontWeight,
        fontWeightName: body.fontWeightName,
        fontURL: `${env.SERVER_URL}/fonts/${file.filename}`,
      },
    };

    // create new font object
    const font = new Font(fontRefactor);
    const savedFont = await font.save();

    // save the collection to user
    const user = await User.findById({ _id: req.userId });
    user.fonts.push(font._id);
    await user.save();

    return res.status(201).json({
      status: "success",
      data: savedFont,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: "You are not permitted",
    });
  }
});

router.post("/update", upload.single("font"), async (req, res) => {
  const file = req.file;
  const { userId, fontName, fontWeight } = req.body;

  const font = await Font.findOne({ fontName: fontName });

  await font.updateOne({
    $push: {
      fontWeights: {
        fontWeight,
        fontURL: `${process.env.SERVER_URL}/fonts/${file.filename}`,
      },
    },
  });

  res.status(200).json({
    status: "success",
    data: "Updated",
  });
});

// returning the font style to the project url
router.get("/style", redisCache, async (req, res) => {
  try {
    const fontFamily = req.query.fontFamily;

    const fontNameList = fontFamily.split(",");
    const fontsList = await Font.find()
      .where("fontName")
      .in(fontNameList)
      .exec();

    const formatString = await renderStyle(fontsList);

    const cacheKey = req.cacheKey;
    setCache(cacheKey, formatString);

    res.setHeader("Content-Type", "text/css");
    return res.status(200).format({
      "text/css": async function () {
        res.send(formatString);
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// return all the font style
router.get("/style/all", redisCache, async (req, res) => {
  try {
    const fonts = await Font.find();

    const formatString = await renderStyle(fonts);

    const cacheKey = req.cacheKey;
    setCache(cacheKey, formatString);

    return res.status(200).format({
      "text/css": async function () {
        res.send(formatString);
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// get all fonts
router.get("/all", async (req, res) => {
  try {
    const fonts = await Font.find();
    return res.status(200).json(fonts);
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

// get a font
router.get("/", redisCache, async (req, res) => {
  const fontName = req.query.fontName;

  try {
    const font = await Font.find({ fontName: fontName });

    return res.status(200).json(font);
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

// get font list by userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate("fonts");
    return res.status(200).json(user.fonts);
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});
module.exports = router;

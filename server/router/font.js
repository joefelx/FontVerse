const router = require("express").Router();

const User = require("../model/User");
const Font = require("../model/Font");

const upload = require("../storage");
const RenderCSS = require("../utils/fontUtils");
const redisClient = require("../utils/redis");
const s3 = require("../storage/aws");

const s3Connection = require("../storage/aws");
const generateName = require("../utils/generateName");
const isAdmin = require("../middleware/isAdmin");

const env = require("../utils/constEnv");

// store new font in db
router.post("/new", isAdmin, upload.single("font"), async (req, res) => {
  try {
    const file = req.file;
    const body = req.body;

    const fontFound = await Font.findOne({
      fontSlug: body.fontSlug,
    });

    if (fontFound) {
      // Step1: Upload the file to AWS
      // Step2: setup the cdn for the AWS bucket
      const genFontName = generateName();
      await s3Connection.uploadFont(genFontName, file.buffer, file.mimetype);
      console.log("Step 1 -> Font uploaded: ", genFontName);
      // push the font weight into the font

      const newFontWeight = {
        fontWeight: body.fontWeight,
        fontURL: `${env.FONTCDN}/${genFontName}`,
      };

      fontFound.fontWeights.push(newFontWeight);

      await fontFound.save();

      return res.status(200).json({
        status: "success",
        data: "fontSaved",
      });
    }
    // Step1: Upload the file to AWS
    // Step2: setup the cdn for the AWS bucket
    const genFontName = generateName();
    await s3Connection.uploadFont(genFontName, file.buffer, file.mimetype);
    console.log("Step 1 -> Font uploaded: ", genFontName);

    // Step3: get the filename from AWS and store it in mongodb

    const fontRefactor = {
      userId: req.userId,
      fontName: body.fontName,
      fontSlug: body.fontSlug,
      fontDetails: body.fontDetails,
      fontWeights: {
        fontWeight: body.fontWeight,
        fontWeightName: body.fontWeightName,
        fontURL: `${env.FONTCDN}/${genFontName}`,
      },
    };

    console.log("Step 2 -> Refactor font document");

    // create new font object
    const font = new Font(fontRefactor);
    const savedFont = await font.save();
    console.log("Step 3 -> Saved Font!");

    // save the collection to user
    const user = await User.findById({ _id: req.userId });
    user.fonts.push(font._id);
    await user.save();

    console.log("Step 4 -> Saved Font to User collection!");

    res.status(201).json({
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
router.get("/style", async (req, res) => {
  try {
    let fontFamily = req.query.fontFamily;

    // let value = await redisClient.get(`style:${fontFamily}`);

    // if (value != null) {
    //   console.log("inside");
    //   res.setHeader("Content-Type", "text/css");

    //   return res.status(200).format({
    //     "text/css": async function () {
    //       res.send(value);
    //     },
    //   });
    // }
    let fontFamilyList = fontFamily.split(",");
    let formatString = await RenderCSS(fontFamilyList, false);

    // redisClient.set(`style:${fontFamily}`, formatString);

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
router.get("/style/all", async (req, res) => {
  try {
    let fonts;
    const path = req.path;

    // fonts = await redisClient.get(path);

    // if (fonts != null) {
    //   return res.status(200).format({
    //     "text/css": async function () {
    //       res.send(fonts);
    //     },
    //   });
    // }
    fonts = await Font.find();
    let formatString = await RenderCSS(fonts, true);

    // redisClient.set(path, formatString);
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
    let fonts;
    const path = req.path;

    // fonts = await redisClient.get(path);
    // if (fonts != null) {
    //   return res.status(200).json(JSON.parse(fonts));

    fonts = await Font.find();
    // redisClient.set(path, JSON.stringify(fonts));
    return res.status(200).json(fonts);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

// get a font
router.get("/", async (req, res) => {
  const fontName = req.query.fontName;

  try {
    let font;

    // // font = await redisClient.get(`model:${fontName}`);
    // // if (font != null) {
    // //   return res.status(200).json(JSON.parse(font));

    font = await Font.find({ fontName: fontName });
    // redisClient.set(`model:${fontName}`, JSON.stringify(font));
    res.status(200).json(font);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

module.exports = router;

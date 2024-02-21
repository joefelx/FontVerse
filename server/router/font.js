const router = require("express").Router();

const User = require("../model/User");
const Font = require("../model/Font");

const upload = require("../storage");
const RenderCSS = require("../utils/utils");

// create font style and store in db
router.post("/upload", upload.single("font"), async (req, res) => {
  const file = req.file;
  const { userId, fontName, fontDetails, fontWeight, price } = req.body;

  const fontRefactor = {
    userId,
    fontName,
    fontDetails,
    fontWeights: {
      fontWeight,
      fontURL: `${process.env.SERVER_URL}/fonts/${file.filename}`,
    },
    price,
  };

  try {
    const checkAdmin = await User.findById(userId);
    if (checkAdmin.admin) {
      // create new font object
      const font = await Font(fontRefactor);
      const savedFont = await font.save();

      res.status(200).json({
        status: "success",
        data: savedFont,
      });
    } else {
      res.status(400).json({
        status: "failed",
        data: "You are not permitted",
      });
    }
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
    let fontFamilyList = fontFamily.split(",");

    let formatString = await RenderCSS(fontFamilyList, false);

    res.setHeader("Content-Type", "text/css");

    res.status(200).format({
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
    const fonts = await Font.find();

    let formatString = await RenderCSS(fonts, true);

    res.status(200).format({
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
    res.status(200).json(fonts);
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
    const fonts = await Font.find({ fontName: fontName });

    res.status(200).json(fonts);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

module.exports = router;

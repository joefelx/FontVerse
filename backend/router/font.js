const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { getFont } = require("../functions");
const Project = require("../model/Project");
const Font = require("../model/Font");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../server/public/fonts");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/uploadfile", upload.single("font"), (req, res) => {
  console.log(req.file);
  res.json(req.file);
});

// create font style and store in db
router.post("/upload", async (req, res) => {
  const font = await Font(req.body);

  try {
    // create new font object
    const savedFont = await font.save();
    res.status(200).json({
      status: "success",
      data: savedFont,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

// returning the font style to the project url
router.get("/style", async (req, res) => {
  let fontFamily = req.query.fontFamily;
  let splitname = fontFamily.split(",");

  let formatString = await getFont(splitname);
  res.format({
    "text/css": async function () {
      res.send(formatString);
    },
  });
});

// get all fonts
router.get("/getfonts", async (req, res) => {
  try {
    const fonts = await Font.find();
    res.status(200).json({
      status: "success",
      data: fonts,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

// get a font
router.get("/getfont", async (req, res) => {
  const fontName = req.query.fontName;
  const fontWeight = req.query.fontWeight;

  const fonts = fontName
    ? await Font.find({ fontName: fontName })
    : await Font.find({ fontWeight: fontWeight });

  try {
    res.status(200).json({
      status: "success",
      data: fonts,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

router.get("/style/:userid/:projectid", async (req, res) => {
  const userid = req.params.userid;
  const projectid = req.params.projectid;

  const project = await Project.findById(projectid);

  // if (userid === project.userId) {

  // }

  const callfunc = async () => {
    let fontFamily = req.query.fontFamily;
    let [formatString] = await getFont(fontFamily);

    res.send(formatString);
  };

  callfunc();

  res.format({
    "text/css": callfunc(),
  });
});

module.exports = router;

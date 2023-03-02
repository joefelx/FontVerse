const router = require("express").Router();
const Project = require("../model/Project");

router.post("/", async (req, res) => {
  try {
    const data = await Project(req.body);
    data.save();
    res.status(200).json({
      status: "success",
      bundle: "created",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      bundle: "not created",
      data: err,
    });
  }
});

// creating the project and getting the font styles in post request
router.post("/:userid/:projectid", async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectid);
    await project.update({ $push: { fontFamilies: req.body.fontFamilies } });
    res.status(200).json({
      status: "success",
      bundle: "created",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      bundle: "not created",
      data: err,
    });
  }
});

module.exports = router;

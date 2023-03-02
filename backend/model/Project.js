const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  fontFamilies: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Project", ProjectSchema);

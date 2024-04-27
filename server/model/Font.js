const mongoose = require("mongoose");

const FontSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fontName: {
      type: String,
      required: true,
    },
    fontSlug: {
      type: String,
      unique: true,
    },

    fontDetail: {
      type: String,
      default: "",
    },
    fontWeights: {
      type: Array,
      default: [
        {
          fontWeight: {
            type: String,
          },
          fontWeightName: {
            type: String,
          },
          fontURL: {
            type: String,
          },
        },
      ],
    },
    fontStyle: {
      type: String,
      default: "normal",
    },
    price: {
      type: String,
      default: "FREE",
    },
    type: {
      type: String,
      default: "woff2",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Font", FontSchema);

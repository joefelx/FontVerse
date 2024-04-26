const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    favorite: {
      type: Array,
      default: [],
    },
    fonts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Font",
      },
    ],

    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

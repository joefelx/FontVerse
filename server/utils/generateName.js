const crypto = require("crypto");

function generateName(bytes = 32) {
  return crypto.randomBytes(bytes).toString("hex");
}

module.exports = generateName;

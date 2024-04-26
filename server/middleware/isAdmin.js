const User = require("../model/User");

const isAdmin = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json("Unauthorized");
  }

  const adminId = req.headers.authorization;
  const isAdmin = await User.findById({ _id: adminId, isAdmin: true });

  if (!isAdmin) return res.status(401).json("Unauthorized");

  req.userId = adminId;

  next();
};

module.exports = isAdmin;

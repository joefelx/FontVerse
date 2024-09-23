const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../model/User");

// Authenication and User creation

// User in Sign Up
router.post("/auth/signup", async (req, res) => {
  try {
    const founduser = await User.findOne({ email: req.body.email });

    console.log(req.body);

    if (founduser) {
      return res.status(400).json({
        status: "failed",
        data: "User Already Registered! Try to Login or SignIn",
      });
    }

    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRound);

    const user = await User({
      email: req.body.email,
      password: hashedPassword,
    });

    const newUser = await user.save();
    console.log(newUser);

    return res.status(201).json({
      status: "success",
      data: newUser,
      logged: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

// Sign in or Login user
router.post("/auth/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).populate(
      "fonts"
    );
    if (!user) {
      return res.status(404).json({
        status: "failed",
        data: "No user found",
        logged: false,
      });
    }

    const validPassword = bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        status: "failed",
        data: "Password Wrong",
        logged: false,
      });
    }

    res.status(200).json({
      status: "success",
      data: user,
      logged: true,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: error,
    });
  }
});

// Update user
router.put("/update/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    if (req.body.password) {
      try {
        const saltRound = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, saltRound);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.body.userId, {
        $set: req.body,
      });
      res.status(200).json({
        status: "success",
        data: user,
        updated: true,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        data: error,
        updated: false,
      });
    }
  }
});

// Delete user
router.delete("/delete/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      await User.findByIdAndDelete(req.body.userId);
      res.status(202).json({
        status: "success",
        data: "User deleted",
        deleted: true,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        data: error,
        deleted: false,
      });
    }
  }
});

module.exports = router;

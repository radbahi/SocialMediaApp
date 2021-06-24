const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.sendStatus(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
        //$set is from mongodb. replaces the value of a field with the specified value.
      });
      res.sendStatus(200).json("Account has been updated");
    } catch (error) {
      return res.sendStatus(500).json(error);
    }
  } else {
    return res.sendStatus(403).json("You can update only your account");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.sendStatus(200).json("Account has been deleted");
    } catch (error) {
      return res.sendStatus(500).json(error);
    }
  } else {
    return res.sendStatus(403).json("You can delete only your account");
  }
});

//get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc; //_doc is all the info we get from mongodb from a document
    //we're passing in all the info except the password and updatedAt below
    res.sendStatus(200).json(other);
  } catch (error) {
    res.sendStatus(500).json(error);
  }
});

//follow a user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } }); //$methods are from mongodb
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.sendStatus(200).json("User has been followed");
      } else {
        res.sendStatus(403).json("You already follow this user");
      }
    } catch (error) {
      res.sendStatus(500).json(error);
    }
  } else {
    res.sendStatus(403).json("You can't follow yourself");
  }
});

//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.sendStatus(200).json("User has been unfollowed");
      } else {
        res.sendStatus(403).json("You don't follow this user");
      }
    } catch (error) {
      res.sendStatus(500).json(error);
    }
  } else {
    res.sendStatus(403).json("You can't unfollow yourself");
  }
});

module.exports = router;

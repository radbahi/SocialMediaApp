const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  if ((req, body.userId === req.params.id || req.user.isAdmin)) {
    if (req.body.password) {
      try {
        const salt = await brcrypt.genSalt(10);
      } catch (error) {}
    }
  } else {
    return res.status(403).json("You can update only your account");
  }
});
//delete user

//get user

//follow a user

//unfollow a user

module.exports = router;

const express = require("express");
const router = express.Router();

const users = require("../conroller/UserController");
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
router.get("/userlist", users.userlist);
router.post("/adduser", users.adduser);

module.exports = router;

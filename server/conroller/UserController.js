const mongoose = require("mongoose");
const userModel = require("../model");
const { body } = require("express-validator/check");

mongoose.connect("mongodb://db:27017/usersdb", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected Successfully");
});
const userlist = async (req, resp, next) => {
  try {
    const users = await userModel.find({});
    resp.send(users);
  } catch (error) {
    resp.status(500).send(error);
  }
};

const adduser = async (req, resp, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      resp.status(422).json({ errors: errors.array() });
      return;
    }
    const user = new userModel(req.body);

    await user.save();
    resp.send(user);
  } catch (error) {
    resp.status(500).send(error);
  }
};

exports.validate = (method) => {
  switch (method) {
    case "createUser": {
      body("firstname").exists().isAlpha().isLength({ max: 20 });
      body("lastname").exists().isAlpha().isLength({ max: 20 });
      body("email").exists().isEmail();
    }
  }
};

module.exports = {
  adduser,
  userlist,
};

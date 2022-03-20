const mongoose = require("mongoose");
const userModel = require("../model");

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
  console.log(req);
  const user = new userModel(req.body);
  try {
    await user.save();
    resp.send(user);
  } catch (error) {
    resp.status(500).send(error);
  }
};

module.exports = {
  adduser,
  userlist,
};

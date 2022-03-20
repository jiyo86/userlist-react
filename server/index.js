const express = require("express");
const cookie_parser = require("cookie-parser");
const cors = require("cors");
const users = require("./routes/users");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();
app.use(cors());
app.use(cookie_parser());
app.use(express.json());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", users);

app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json("Endpoint not found");
});

var port = process.env.PORT || "8080";
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const RegisterDB = require("../db/registerDB");

const userRoute = express.Router();

userRoute.post("/new-user", (req, res) => {
  let newUserQuery = `INSERT INTO users VALUES ('NULL','${req.body.name}','${
    req.body.family
  }','${req.body.username}','${req.body.password}',"${GetTime()}")`;

  RegisterDB.query(newUserQuery, (err, result) => {
    if (!err) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

module.exports = userRoute;

function GetTime() {
  var date;
  date = new Date();
  date =
    date.getUTCFullYear() +
    "-" +
    ("00" + (date.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("00" + date.getUTCDate()).slice(-2) +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);
  return date;
}

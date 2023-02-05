const express = require("express");
const bodyParser = require("body-parser");
const RegisterDB = require("../db/registerDB");
const { json } = require("body-parser");

const userRoute = express.Router();

userRoute.get("/get-user/:id", (req, res) => {
  let userId = req.params.id;
  let getUserQuery = `SELECT * FROM users WHERE id=${userId}`;
  RegisterDB.query(getUserQuery, (err, result) => {
    if (!err) {
      console.log("Edit User");
      res.send(JSON.stringify(result));
    } else {
      console.log(err);
      res.send(null);
    }
  });
});
userRoute.post("/new-user", (req, res) => {
  let { name, family, username, password } = req.body;

  if (Validator(name, family, username, password)) {
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
  } else {
    res.send(false);
  }
});

userRoute.delete("/remove/:id", (req, res) => {
  let userId = req.params.id;
  let deleteUserQuery = `DELETE FROM users WHERE id=${userId}`;
  RegisterDB.query(deleteUserQuery, (err, result) => {
    if (!err) {
      console.log("Delete User");
      res.send(JSON.stringify(result));
    } else {
      console.log(err);
      res.send(null);
    }
  });
});

userRoute.put("/edit/:id", (req, res) => {
  let userId = req.params.id;
  let editUserQuery = `UPDATE users SET name='${req.body.name}',family='${req.body.family}',username='${req.body.username}',password='${req.body.password}' WHERE id=${userId}`;
  RegisterDB.query(editUserQuery, (err, result) => {
    if (!err) {
      console.log("Edit User");
      res.send(JSON.stringify(result));
    } else {
      console.log(err);
      res.send(null);
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

function Validator(name, family, username, password) {
  let pat = /^.*?(?=[\^#@%&$\*:<>\?/\{\|\}]).*$/;
  let regex = new RegExp(pat);
  name = name.trim();
  family = family.trim();
  username = username.trim();
  password = password.trim();
  if (name != "" && family != "" && username != "" && password != "") {
    if (!regex.test(name) && !regex.test(family) && !regex.test(username)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const express = require("express");
const bodyParser = require("body-parser");
const RegisterDB = require("./db/registerDB");

const userRoute = express.Router();

userRoute.post("/", (req, res) => {
  RegisterDB.connect((err) => {
    if (!err) {
      let date = new Date().toLocaleDateString("fa-IR");

      let newUserQuery = `INSERT INTO users VALUES ('NULL','${req.body.name}','${req.body.family}','${req.body.username}','${req.body.password}','${date}')`;

      RegisterDB.query(newUserQuery, (err, result) => {
        if (!err) {
          console.log("New User Added");
        }
      });
    } else {
      console.log("error");
    }
  });
});

module.exports = userRoute;

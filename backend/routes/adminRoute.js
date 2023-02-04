const express = require("express");
const bodyParser = require("body-parser");
const RegisterDB = require("../db/registerDB");
const adminRoute = express.Router();

adminRoute.get("/", (req, res) => {
  let getUsersQuery = `SELECT * FROM users WHERE 1`;
  RegisterDB.query(getUsersQuery, (err, result) => {
    if (!err) {
      res.send(JSON.stringify(result));
    } else {
      console.log(err);
      res.send(null);
    }
  });
});

module.exports = adminRoute;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const RegisterDB = require("./db/registerDB");

RegisterDB.connect((err) => {
  if (!err) {
    let newUserQuery =
      "INSERT INTO `users` VALUES ('NULL','sadegh','ghasemi','SadeghAT','1234','2020-01-01')";
    RegisterDB.query(newUserQuery, (err, result) => {
      if (!err) {
        console.log("New User Added");
      }
    });
  } else {
    console.log("error");
  }
});

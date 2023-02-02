const mysql = require("mysql");

const RegisterDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerDB",
});

module.exports = RegisterDB;

const mysql = require("mysql");

const registerDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerDB",
});

module.exports = registerDB;

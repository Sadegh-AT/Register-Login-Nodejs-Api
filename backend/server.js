const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

let db = {
  users: [
    {
      id: 1,
      username: "sadegh",
      email: "sadegh.artivox@gmail.com",
      password: "1234",
    },
  ],
};
app.use(cors());
app.use(bodyParser.json());

app.post("/api/add-user", (req, res) => {
  let newUser = {
    id: db.users.length + 1,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  db.users.push(newUser);
  console.log(db.users);
});

app.listen(3000);

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

app.post("/api/add-user", (req, res) => {});

app.listen(3000);

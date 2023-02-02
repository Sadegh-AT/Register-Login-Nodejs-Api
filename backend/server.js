const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/usersRoute");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoute);

app.listen(3000);

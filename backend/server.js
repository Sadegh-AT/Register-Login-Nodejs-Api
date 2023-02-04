const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/usersRoute");
const adminRoute = require("./routes/adminRoute");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/users", adminRoute);

app.listen(3000);

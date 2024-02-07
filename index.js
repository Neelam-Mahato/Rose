const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3143;
app.listen(
  PORT,
  console.log(
    `Server running LOVE on ${PORT} at ${new Date()}`
  )
);

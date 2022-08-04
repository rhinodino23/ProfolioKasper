require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const route = require("./route/pages");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Extras")));
app.set("views", path.join(__dirname, "windows"));
app.use("/", route);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

mongoose
  .connect(process.env.MOONGOO, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running.");
    });
  });

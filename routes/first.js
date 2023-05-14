//import dependencies
const express = require("express");
const path = require("path");
const db = require("./config/config");
const PORT = process.env.PORT || 3000;

//Import Routes
const first = require("./router/first");
const second = require("./router/second");

//start the express app
const app = express();

//IMPORT MIDDLEWARES
app.get("/", (req, res) => res.send("Node App is running"));
app.use("/", first);
app.use("/", second);

//connect to database once app is started
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected");
});

//make the connection global
global.db = db;

//to keep the connection alive, make frequent quries to SQL database
setInterval(function () {
  db.query("SELECT 1");
}, 5000);

app.listen(PORT, () => console.log(`WebApp running on port  ${PORT}`));

module.exports = app;

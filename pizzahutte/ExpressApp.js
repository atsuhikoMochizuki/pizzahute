// Dependencies
// ======================================================================
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/route_adminLogin");
var usersRouter = require("./routes/routes_users");
var forgotPwdRouter = require("./routes/route_forgottenPwd");
var SendNewPwdRouter = require("./routes/newPwd_query");

//const db = require("./config/config.js");
// // Connexion à la base de données
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("connected");
// });
// setInterval(function () {
//   db.query("SELECT 1");
// }, 5000);
//global.db = db;
//const first = require("./routes/first");

// ======================================================================

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/forgot", forgotPwdRouter);
app.use("/newPwd_query", SendNewPwdRouter);

//pour maintenir la connexion en vie, faire des requêtes fréquentes à la base de données SQL

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

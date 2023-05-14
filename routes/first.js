// Dependencies
var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");

// db.query = loadSQLScript(db);

//GET request
router.get("/", function (req, res, next) {
  const db = require("../config/config");
  // const query = db.query(users, (err, result) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.send("Query run successfully");
  //   }
  // });
  //const query = loadSQLScript(db);
});

async function loadSQLScript(db) {
  console.log("COUCOU");
  const users = fs
    .readFileSync(path.join(__dirname, "../sql/db.sql"))
    .toString();
  console.log(users);
  // const query = await db.query(users, (err, result) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.send("Query run successfully");
  //   }
  // });
  // return query;
}

//GET request
// router.get("/first", function (req, res, next) {
//   // res.render("index", {
//   //   title:
//   //     "PIZZAHUTTE - Pizzéria collaborative située à Perpet-les-Pranades dans le Doubs",
//   // });
//   console.log("COUCOU");
// });

module.exports = router;

// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const db = require("../config/config.js");

// const router = express.Router();

// router.get("/first", async (req, res) => {
//   res.render("index", {
//     title:
//       "PIZZAHUTTE - Pizzéria collaborative située à Perpet-les-Pranades dans le Doubs",
//   });
//   // const users = fs
//   //   .readFileSync(path.join(__dirname, "../sql/db.sql"))
//   //   .toString();
//   // const query = await db.query(users, (err, result) => {
//   //   if (err) {
//   //     throw err;
//   //   } else {
//   //     res.send("Query run successfully");
//   //   }
//   // });
//   console.log("ON EST RENTRES");
// });

// module.exports = router;

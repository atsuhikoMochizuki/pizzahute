var express = require("express");
const child_process = require("child_process");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "PIZZAHUTTE - Pizzéria collaborative située à Perpet-les-Pranades",
  });
});

module.exports = router;

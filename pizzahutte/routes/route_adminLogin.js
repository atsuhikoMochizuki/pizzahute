// Dependencies
var express = require("express");
var router = express.Router();

//GET request
router.get("/", function (req, res, next) {
  res.render("index", {
    title:
      "PIZZAHUTTE - Pizzéria collaborative située à Perpet-les-Pranades dans le Doubs",
  });
});

module.exports = router;

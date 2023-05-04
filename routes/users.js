// Dependencies
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("users", {
    title: "PIZZAHUTTE - Pizzéria à Perpette-les-pranades(Doubs)",
  });
});
module.exports = router;

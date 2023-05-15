var express = require("express");
var router = express.Router();
let bodyParser = require("body-parser");

router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));
/* GET users listing. */
router.post("/", function (req, res, next) {
  console.log(req.body.p1);
  res.json(req.body);
  console.log(res);
  console.log("Génération d'un nouveau mot de passe");
  let newPwd = generatePwd();
});

module.exports = router;

function generatePwd(l) {
  if (typeof l === "undefined") {
    var l = 8;
  }
  /* c : chaîne de caractères alphanumérique */
  var c = "abcdefghijknopqrstuvwxyzACDEFGHJKLMNPQRSTUVWXYZ12345679",
    n = c.length,
    /* p : chaîne de caractères spéciaux */
    p = "!@#$+-*&_",
    o = p.length,
    r = "",
    n = c.length,
    /* s : determine la position du caractère spécial dans le mdp */
    s = Math.floor(Math.random() * (p.length - 1));

  for (var i = 0; i < l; ++i) {
    if (s == i) {
      /* on insère à la position donnée un caractère spécial aléatoire */
      r += p.charAt(Math.floor(Math.random() * o));
    } else {
      /* on insère un caractère alphanumérique aléatoire */
      r += c.charAt(Math.floor(Math.random() * n));
    }
  }
  return r;
}

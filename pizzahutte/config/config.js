const mysql = require("mysql");
const path = require("path");
const fs = require("fs");

// Constants
const MODULE_NAME = "Db-admin";

const FAILURE = "\033[0;31m";
const WARNING = "\033[1;33m";
const SUCCESS = "\033[0;32m";
const INFO = "\033[0;34m";
const ENTITY = "\033[0;35m";
const NO_COLOR = "\033[0m";

const P = NO_COLOR + "[" + WARNING + MODULE_NAME + "-manager" + NO_COLOR + "]";

console.log(`${P}Connnexion à la base de données pizzahutte_admin_db`);
var con = mysql.createConnection({
  database: "pizzahutte_admin_db",
  host: "localhost",
  user: "pizzahutte-admin",
  password: "pizzahutte",
});
con.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

const query0 = `DROP TABLE users ;`;
con.query(query0, (err, res) => {
  if (err) throw err;
  console.log("insert OK");
});

const query1 = `CREATE TABLE if not exists users (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(70) NULL,
    pass VARCHAR(70) NULL,
    nom VARCHAR(70) NULL,
    prenom VARCHAR(70) NULL
);`;
con.query(query1, (err, res) => {
  if (err) throw err;
  console.log("insert OK");
});

const query2 = `INSERT INTO users(email,pass,nom,prenom) 
VALUES
("gino@pizzahutte.com","gino1972","Giacomucci","Gino"),
("alberto@pizzahutte.com","alberto1994","Zacchi","Alberto"),
("bernado@pizzahutte.com","bernado1992","Lapi","Bernado"),
("alba@pizzahutte.com","alba1984","Dello-Iavoco","Alba");`;
con.query(query2, (err, res) => {
  if (err) throw err;
  console.log("insert OK");
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});

module.exports = con;

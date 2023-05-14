const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "pizzahutte-admin",
  password: "pizzahutte",
  database: "pizzahutte_admin_db",
  multipleStatements: true,
});

module.exports = db;

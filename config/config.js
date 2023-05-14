const mysql = require("mysql");

// Constants
const MODULE_NAME = "Db-admin";

const FAILURE = "\033[0;31m";
const WARNING = "\033[1;33m";
const SUCCESS = "\033[0;32m";
const INFO = "\033[0;34m";
const ENTITY = "\033[0;35m";
const NO_COLOR = "\033[0m";

const P = NO_COLOR + "[" + WARNING + MODULE_NAME + "-manager" + NO_COLOR + "]";

function sqlConnect() {
  try {
    console.log(`${P}Connnexion à la base de données pizzahutte_admin_db`);
    var conn = mysql.createConnection({
      database: "pizzahutte_admin_db",
      host: "localhost",
      user: "pizzahutte-admin",
      password: "pizzahutte",
    });
    conn.connect();
    var sql1 = "DROP TABLE IF EXISTS Employees ";
    conn.query(sql1, function (err, results) {
      if (err) throw err;
      console.log("Table EMPLOYEES dropped");
    });
    var sql2 =
      "CREATE TABLE Employees " +
      " (Id INT not null AUTO_INCREMENT, " +
      " Emp_No VARCHAR(20), " +
      " Full_Name VARCHAR(255), " +
      " Hire_Date DATE, " +
      " PRIMARY KEY (Id) )";

    conn.query(sql2, function (err, results) {
      if (err) throw err;
      console.log("Table Employees created");
    });

    conn.query("SHOW TABLES;", function (err, results) {
      if (err) throw err;
    });
  } catch {
    conn.connect(function (err) {
      if (err) throw err;
    });
  }
  console.log(`${P}${SUCCESS}...Connexion à la base de données OK${NO_COLOR}`);

  return conn;
}

async function adminConnect() {
  return await sqlConnect();
}

var db = adminConnect();

module.exports = db;

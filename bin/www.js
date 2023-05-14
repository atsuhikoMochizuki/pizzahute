#!/usr/bin/env node

//Constants
// ======================================================================
/*Entitys*/
const PROJECT_NAME = "PizzaHutte";
/*CONSTANTS- Parameters*/
const SERVER_PORT_NUMBER = "8000";
/*CONSTANTS- Shell*/
const FAILURE = "\033[0;31m";
const WARNING = "\033[1;33m";
const SUCCESS = "\033[0;32m";
const INFO = "\033[0;34m";
const ENTITY = "\033[0;35m";
const NO_COLOR = "\033[0m";

const P = NO_COLOR + "[" + ENTITY + PROJECT_NAME + "-server" + NO_COLOR + "]";
/*Dépendencies*/

var app = require("../app.js");
var debug = require("debug")("pizzahutte:server");
var http = require("http");
const { exec } = require("node:child_process");

// ======================================================================

// Main application
// ======================================================================
// console.clear();
// console.log(`${P}Connexion à la base de données SQL pizzahutte_admin_db...`);
// var SQL_connexion = require("../db_management_admin.js");
//console.log(`${P}${SUCCESS}...Connexion OK`);
const db = require("../config/config.js");
console.log(`${P}Démarrage du serveur PizzaHutte...`);

/*Setting port Number in Express App*/
var port = normalizePort(process.env.PORT || SERVER_PORT_NUMBER);
app.set("port", port);

/*Creation of Http server*/
var server = http.createServer(app);

// Start listening on port
server.listen(port);

// Callbacks assignment to events
server.on("error", onError);
server.on("listening", onListening);

/*Welcome Prompt for user*/
console.log(`
 _____ _____ ____________         _    _ _    _ _______ _______ ______
|  __ \\_   _|___  /___  /   /\\   | |  | | |  | |__   __|__   __|  ____|
| |__) || |    / /   / /   /  \\  | |__| | |  | |  | |     | |  | |__
|  ___/ | |   / /   / /   / /\\ \\ |  __  | |  | |  | |     | |  |  __|
| |    _| |_ / /__ / /__ / ____ \\| |  | | |__| |  | |     | |  | |___
|_|   |_____/_____/_____/_/    \\_\\_|  |_|\\____/   |_|     |_|  |______|---Admin
version 1.0
by Atsuhiko Mochizuki
https://github.com/atsuhikoMochizuki
${P}${SUCCESS}...Démarrage OK. Serveur en écoute sur le port ${port}.`);
console.log(`${P}${INFO}En attente de requêtes...${NO_COLOR}`);

const localHostClient = "http://localhost:" + port;
launchClientBrowser(localHostClient);
// ======================================================================

// Events listeners of HTTP server
//=================================================================
//  !** => "listening"
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

//  !** => "error"
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  /*Error handles*/
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//Misceleanous functions
//=================================================================
// Normalize a port into a number, string, or false
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// Launch default browser client on selected port
function launchClientBrowser(host) {
  console.log(`${P}${INFO}Lancement du browser coté client sur ${host}...`);
  const shellCommand = "xdg-open " + host;
  exec(shellCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`${FAILURE}[]...Lancement browser ECHEC: ${error}`);
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      console.error(
        `${WARNING}[]Pour accéder à la page d'accueil entrez manuellement dans la page d'accueil de votre navigateur l'adresse suivante: 
        ${host}...${NO_COLOR}`
      );
    } else {
      console.log(`${P}${SUCCESS}...Lancement browser OK${NO_COLOR}`);
    }
  });
}

"use strict";
exports.__esModule = true;
var starfighters_1 = require("./starfighters");
var falcon = new starfighters_1.MillenniumFalconModulo();
falcon.jumpIntoHyperspaceModulo();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good  for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));

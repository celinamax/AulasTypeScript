"use strict";
exports.__esModule = true;
var MillenniumFalconModulo_1 = require("./MillenniumFalconModulo");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
//faltava este trecho do código
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new MillenniumFalconModulo_1.MillenniumFalconModulo();
falcon.jumpIntoHyperspaceModulo();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good  for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));

"use strict";
exports.__esModule = true;
var SpacecraftModulo = /** @class */ (function () {
    function SpacecraftModulo(propulsor) {
        this.propulsor = propulsor;
    }
    SpacecraftModulo.prototype.jumpIntoHyperspaceModulo = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return SpacecraftModulo;
}());
exports.SpacecraftModulo = SpacecraftModulo;

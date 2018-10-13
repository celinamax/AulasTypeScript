"use strict";
exports.__esModule = true;
var MillenniumFalconModuloodulo = /** @class */ (function () {
    function MillenniumFalconModuloodulo() {
        _this = _super.call(this, 'hyperdrive') || this;
        this.cargoContainers = 4;
    }
    MillenniumFalconModuloodulo.prototype.jumpIntoHyperspaceModulo = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspaceModulo.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFalconModuloodulo;
}());

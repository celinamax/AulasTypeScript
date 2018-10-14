"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var SpacecraftModulo_1 = require("./SpacecraftModulo");
var MillenniumFalconModulo = /** @class */ (function (_super) {
    __extends(MillenniumFalconModulo, _super);
    function MillenniumFalconModulo() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MillenniumFalconModulo.prototype.jumpIntoHyperspaceModulo = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspaceModulo.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFalconModulo;
}(SpacecraftModulo_1.SpacecraftModulo));
exports.MillenniumFalconModulo = MillenniumFalconModulo;

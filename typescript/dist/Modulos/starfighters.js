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
var base_ships_1 = require("./base-ships");
var MillenniumFalconModulo = /** @class */ (function (_super) {
    __extends(MillenniumFalconModulo, _super);
    function MillenniumFalconModulo() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    return MillenniumFalconModulo;
}(base_ships_1.SpacecraftModulo));
jumpIntoHyperspaceModulo();
{
    if (Math.random() >= 0.5) {
        _super.jumpIntoHyperspaceModulo.call(this);
    }
    else {
        console.log('Failed to jump into hyperspace');
    }
    export { MillenniumFalconModulo };
}

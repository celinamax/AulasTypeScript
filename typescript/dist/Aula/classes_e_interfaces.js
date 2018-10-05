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
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    return Spacecraft;
}());
jumpIntoHyperspace();
{
    console.log("Entering hyperspace with" + this.propulsor);
}
var falcon = new Spacecraft("hyperdrive");
falcon.jumpIntoHyperspace();
Entering;
hyperspace;
with (hyperdrive
//criando uma classe com codigo reduzido
) {
    //criando uma classe com codigo reduzido
    var Spacecraft = /** @class */ (function () {
        function Spacecraft(propulsor) {
            this.propulsor = propulsor;
        }
        return Spacecraft;
    }());
}
//conceito de herança
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        return _super.call(this, "hyperdrive") || this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log("Failed");
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, "hyperdrive") || this;
        _this.cargoContainer = 4;
        return _this;
    }
    return MillenniumFalcon;
}(Spacecraft));
function goodForTheJob(ship) {
    return Ship.cargoContainers > 2;
}
var falcon = new MillenniumFalcon();
console.log(goodForTheJob(falcon))
    > true;
hidden;
containers: number;

"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        ///// NOTE : function type only working when you return somthing
        // console.log(this.name);
        return this.name;
    };
    return App;
}());
var a1 = new App("anil");
console.log(a1.getName());

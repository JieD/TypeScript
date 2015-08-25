//// [structNotExtendingClass.ts]
class C {
	foo: string;
	thing() { }
    static other() { }
}

struct D extends C { // error, struct can only extend struct
	bar: string;
}


//// [structNotExtendingClass.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C() {
    }
    C.prototype.thing = function () {
    };
    C.other = function () {
    };
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    return D;
})(C);

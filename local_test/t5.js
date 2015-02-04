if (Math.fround === undefined) {
    Math.fround = function(x) {
        if (isNaN(x)) return NaN;
        x = Number(x);
        if (x === 0) return x;
        if (!isFinite(x)) return x;
        return new Float32Array([x])[0];
    }
}
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base() {
    }
    return Base;
})();
var Son = (function (_super) {
    __extends(Son, _super);
    function Son() {
        _super.apply(this, arguments);
    }
    return Son;
})(Base);
var fx;
var fy = 1.234567890123;
fx = Math.fround(fy);
console.log(fy);
console.log(fx);
function fun(x, y) {
    y = (y & 255) << 24 >> 24;
    x = x & 255;
    var _$0;
    var z = 1.5 | 0;
    (_$0 = z, z = z + 1, _$0);
    return x + y + z >>> 0;
}
var ret = fun(256, 2.9);
console.log(ret);
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
new GenericNumber().add = function (x, y) {
    y = y & 255;
    x = x | 0;
    return x + y & 255;
};
var func1 = function (x) {
    x = x | 0;
    return x * 2 & 255;
};
var func2 = function (x, y) {
    y = y | 0;
    x = x | 0;
    return x + y & 255;
};
func1(200.4);
func2(255.7, 1.9);

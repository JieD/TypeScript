if (Math.fround === undefined) {
    Math.fround = function(x) {
        if (isNaN(x)) return NaN;
        x = Number(x);
        if (x === 0) return x;
        if (!isFinite(x)) return x;
        return new Float32Array([x])[0];
    }
}
var a0 = 1025;
var a1 = 1;
var at = [a0 & 255, a1 & 255, 256.1 & 255];
at = [a0 / 2 & 255, 4, 234.5 & 255];
//
var var1 = 256 & 255;
var var2 = (200 & 255) << 24 >> 24;
var var3 = 600000 & 65535;
var var4 = (100000 & 65535) << 16 >> 16;
var var5 = 3.14 | 0;
var var6 = var3 * 10000 >>> 0;
var var7 = 0.123456789;
var var8 = Math.fround(var7);
var var9 = [var4 & 255, var5 & 255, var6 & 255];
var var10 = 3 / 4 | 0;
var var11 = 1 + 2 | 0;
var var12 = var5 + 2 | 0;
function fun_opt_arg(x) {
    x = x & 255;
    return x | 0;
}
//t0 = 544;
/*
t0 = 655;

var t1 : i8=129;
t1 = 129;
t1 = --t0 * 5.9 + 5;
*/
function fun(x) {
    x = x | 0;
    var _$0;
    (_$0 = x, x = x + 1 | 0, _$0);
    return x & 255;
}
fun(255.9 | 0);
function fun2(x, y) {
    y = y & 255;
    x = x & 255;
    return x + y & 255;
}
;
var f = function fun(x) {
    x = x | 0;
    var _$0;
    (_$0 = x, x = x + 1 | 0, _$0);
    return x & 255;
};
function identity(arg) {
    return arg;
}
var v1 = identity(256); // it's an issue
//
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

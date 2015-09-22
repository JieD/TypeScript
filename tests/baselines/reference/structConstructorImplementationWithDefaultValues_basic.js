//// [structConstructorImplementationWithDefaultValues_basic.ts]
// no errors
struct C {
    constructor(x);
    constructor(x = 1) {
        var y = x;
    }
}

struct D<T> {
    constructor(x);
    constructor(x:T = null) {
        var y = x;
    }
}

//// [structConstructorImplementationWithDefaultValues_basic.js]
// no errors
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor(x) {
        if (x === void 0) { x = 1; }
        var y = x;
    }
    function C(x) {
        var obj = new _C();
        _ctor.call(obj ,x);
        return obj;
    }
    C._TO = _C;
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
    });
    function _ctor(x) {
        if (x === void 0) { x = null; }
        var y = x;
    }
    function D(x) {
        var obj = new _D();
        _ctor.call(obj ,x);
        return obj;
    }
    D._TO = _D;
    return D;
})();

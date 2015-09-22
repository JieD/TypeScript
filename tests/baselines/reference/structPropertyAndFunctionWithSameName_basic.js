//// [structPropertyAndFunctionWithSameName_basic.ts]
struct C {
    x: number;
    x() { // error
        return 1;
    }
}

struct D {
    x: number;
    x(v) { } // error
}

//// [structPropertyAndFunctionWithSameName_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
        x: TypedObject.float64,
    });
    function _ctor() {
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    C._TO = _C;
    _C.prototype.x = function () {
        return 1;
    };
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
        x: TypedObject.float64,
    });
    function _ctor() {
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    D._TO = _D;
    _D.prototype.x = function (v) {
    }; // error
    return D;
})();

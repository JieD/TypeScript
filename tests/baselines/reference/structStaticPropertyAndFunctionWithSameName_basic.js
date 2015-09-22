//// [structStaticPropertyAndFunctionWithSameName_basic.ts]
// ok

struct C {
    static f: number;
    f: number;
}

struct D {
    static f: number;
    f() { }
}

//// [structStaticPropertyAndFunctionWithSameName_basic.js]
// ok
var C = (function () {
    var _C = new TypedObject.StructType({
        f: TypedObject.float64
    });
    function _ctor() {
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    C._TO = _C;
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    D._TO = _D;
    _D.prototype.f = function () {
    };
    return D;
})();

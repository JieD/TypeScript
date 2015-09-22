//// [structStaticAndNonStaticPropertiesSameName_basic.ts]
// ok
struct C {
    x: number;
    static x: number;

    f() { }
    static f() { }
}

//// [structStaticAndNonStaticPropertiesSameName_basic.js]
// ok
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
    _C.prototype.f = function () {
    };
    _C.f = function () {
    };
    return C;
})();

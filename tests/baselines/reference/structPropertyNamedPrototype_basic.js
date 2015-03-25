//// [structPropertyNamedPrototype_basic.ts]
struct C {
    prototype: number; // ok
    static prototype: C; // error
}

//// [structPropertyNamedPrototype_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
        prototype: TypedObject.float64,
    });
    function _ctor() {
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    return C;
})();

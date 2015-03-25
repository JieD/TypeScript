//// [structThisInInstanceMemberInitializer_basic.ts]
// ok

struct C {
    x = this;
}

struct D<T> {
    x = this;
    y: T;
}

//// [structThisInInstanceMemberInitializer_basic.js]
// ok
var C = (function () {
    var _C = new TypedObject.StructType({
        x: TypedObject.Object
    });
    function _ctor() {
        this.x = this;
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
        x: TypedObject.Object,
        y: TypedObject.Object
    });
    function _ctor() {
        this.x = this;
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    return D;
})();

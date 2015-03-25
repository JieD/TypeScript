//// [structConstructorDefaultValuesReferencingThis_basic.ts]
// 'this' cannot be referenced in constructor arguments

struct C {
    constructor(x = this) { } // error
}

struct D<T> {
    constructor(x = this) { } // error
}

struct E<T> {
    constructor(public x = this) { } // error
}

//// [structConstructorDefaultValuesReferencingThis_basic.js]
// 'this' cannot be referenced in constructor arguments
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor(x) {
        if (x === void 0) { x = this; }
    } // error
    function C(x) {
        var obj = new _C();
        _ctor.call(obj ,x);
        return obj;
    }
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
    });
    function _ctor(x) {
        if (x === void 0) { x = this; }
    } // error
    function D(x) {
        var obj = new _D();
        _ctor.call(obj ,x);
        return obj;
    }
    return D;
})();
var E = (function () {
    var _E = new TypedObject.StructType({
    });
    function _ctor(x) {
        if (x === void 0) { x = this; }
        this.x = x;
    } // error
    function E(x) {
        var obj = new _E();
        _ctor.call(obj ,x);
        return obj;
    }
    return E;
})();

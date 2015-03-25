//// [structConstructorWithExpressionLessReturn_basic.ts]
// no error

struct C {
    constructor() {
        return;
    }
}

struct D {
    x: number;
    constructor() {
        return;
    }
}

struct E {
    constructor(public x: number) {
        return;
    }
}

struct F<T> {
    constructor(public x: T) {
        return;
    }
}

//// [structConstructorWithExpressionLessReturn_basic.js]
// no error
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor() {
        return;
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
        x: TypedObject.float64,
    });
    function _ctor() {
        return;
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    return D;
})();
var E = (function () {
    var _E = new TypedObject.StructType({
    });
    function _ctor(x) {
        this.x = x;
        return;
    }
    function E(x) {
        var obj = new _E();
        _ctor.call(obj ,x);
        return obj;
    }
    return E;
})();
var F = (function () {
    var _F = new TypedObject.StructType({
    });
    function _ctor(x) {
        this.x = x;
        return;
    }
    function F(x) {
        var obj = new _F();
        _ctor.call(obj ,x);
        return obj;
    }
    return F;
})();

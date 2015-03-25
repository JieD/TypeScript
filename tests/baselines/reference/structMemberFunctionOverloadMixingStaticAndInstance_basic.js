//// [structMemberFunctionOverloadMixingStaticAndInstance_basic.ts]
struct C {
    foo();
    static foo(); // error, Function overload must not be static.
}

struct D {
    static foo();
    foo(); // error, Function overload must be static.
}

struct E<T> {
    foo(x: T);
    static foo(x: number); // error, Function overload must not be static.
}

struct F<T> {
    static foo(x: number);
    foo(x: T); // error, Function overload must be static.
}

//// [structMemberFunctionOverloadMixingStaticAndInstance_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
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
    return D;
})();
var E = (function () {
    var _E = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function E() {
        var obj = new _E();
        _ctor.call(obj);
        return obj;
    }
    return E;
})();
var F = (function () {
    var _F = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function F() {
        var obj = new _F();
        _ctor.call(obj);
        return obj;
    }
    return F;
})();

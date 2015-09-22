//// [typeOfThisInStructMemberFunctions_basic.ts]
struct C {
    foo() {
        var r = this;
    }

    static bar() {
        var r2 = this;
    }
}

struct D<T> {
    x: T;
    foo() {
        var r = this;
    }

    static bar() {
        var r2 = this;
    }
}

//// [typeOfThisInStructMemberFunctions_basic.js]
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
    C._TO = _C;
    _C.prototype.foo = function () {
        var r = this;
    };
    _C.bar = function () {
        var r2 = this;
    };
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
        x: TypedObject.Object,
    });
    function _ctor() {
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    D._TO = _D;
    _D.prototype.foo = function () {
        var r = this;
    };
    _D.bar = function () {
        var r2 = this;
    };
    return D;
})();

//// [typeOfThisInStructStaticMembers2_basic.ts]
struct C {
    static foo = this; // error, 'this' cannot be referenced in a static property initializer.
}

struct C2<T> {
    static foo = this; // error
}

//// [typeOfThisInStructStaticMembers2_basic.js]
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
    C.foo = this; // error, 'this' cannot be referenced in a static property initializer.
    return C;
})();
var C2 = (function () {
    var _C2 = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function C2() {
        var obj = new _C2();
        _ctor.call(obj);
        return obj;
    }
    C2._TO = _C2;
    C2.foo = this; // error
    return C2;
})();

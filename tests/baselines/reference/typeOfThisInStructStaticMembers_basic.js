//// [typeOfThisInStructStaticMembers_basic.ts]
// Within static member functions and static member accessors, the type of this is
// the constructor function type.

struct C {
    constructor(x: number) { }
    static foo: number;
    static bar() {
        // type of this is the constructor function type
        var t = this;
        return this;
    }
}

var t = C.bar();
// all ok
var r2 = t.foo + 1;
var r3 = t.bar();
var r4 = new t(1);

struct C2<T> {
    static test: number;
    constructor(x: string) { }
    static foo: string;
    static bar() {
        // type of this is the constructor function type
        var t = this;
        return this;
    }
}

var t2 = C2.bar();
// all ok
var r5 = t2.foo + 1;
var r6 = t2.bar();
var r7 = new t2('');



//// [typeOfThisInStructStaticMembers_basic.js]
// Within static member functions and static member accessors, the type of this is
// the constructor function type.
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor(x) {
    }
    function C(x) {
        var obj = new _C();
        _ctor.call(obj ,x);
        return obj;
    }
    C._TO = _C;
    _C.bar = function () {
        // type of this is the constructor function type
        var t = this;
        return this;
    };
    return C;
})();
var t = C.bar();
// all ok
var r2 = t.foo + 1;
var r3 = t.bar();
var r4 = new t(1);
var C2 = (function () {
    var _C2 = new TypedObject.StructType({
    });
    function _ctor(x) {
    }
    function C2(x) {
        var obj = new _C2();
        _ctor.call(obj ,x);
        return obj;
    }
    C2._TO = _C2;
    _C2.bar = function () {
        // type of this is the constructor function type
        var t = this;
        return this;
    };
    return C2;
})();
var t2 = C2.bar();
// all ok
var r5 = t2.foo + 1;
var r6 = t2.bar();
var r7 = new t2('');

//// [structConstructorOverloadsWithDefaultValues_basic.ts]
// A parameter initializer is only allowed in a function or constructor implementation

struct C {
    foo: string;
    constructor(x = 1); // error
    constructor() {
    }
}

struct C1 {
	foo: string;
	constructor();
	constructor(x = 1) { // ok
	}
}

struct D<T> {
    foo: string;
    constructor(x = 1); // error
    constructor() {
    }
}

//// [structConstructorOverloadsWithDefaultValues_basic.js]
// A parameter initializer is only allowed in a function or constructor implementation
var C = (function () {
    var _C = new TypedObject.StructType({
        foo: TypedObject.string,
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
var C1 = (function () {
    var _C1 = new TypedObject.StructType({
        foo: TypedObject.string,
    });
    function _ctor(x) {
        if (x === void 0) { x = 1; }
    }
    function C1(x) {
        var obj = new _C1();
        _ctor.call(obj ,x);
        return obj;
    }
    C1._TO = _C1;
    return C1;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
        foo: TypedObject.string,
    });
    function _ctor() {
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    D._TO = _D;
    return D;
})();

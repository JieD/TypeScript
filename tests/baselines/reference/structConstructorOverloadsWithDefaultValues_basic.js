//// [structConstructorOverloadsWithDefaultValues_basic.ts]
// A parameter initializer is only allowed in a function or constructor implementation

struct C {
    foo: string;
    constructor(x = 1); // error
    constructor() {
    }
}

struct C {
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
    return C;
})();
var C = (function () {
    var _C = new TypedObject.StructType({
        foo: TypedObject.string,
    });
    function _ctor(x) {
        if (x === void 0) { x = 1; }
    }
    function C(x) {
        var obj = new _C();
        _ctor.call(obj ,x);
        return obj;
    }
    return C;
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
    return D;
})();

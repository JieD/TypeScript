//// [structConstructorImplementationWithDefaultValues2_basic.ts]
struct C {
    constructor(x);
    constructor(public x: string = 1) { // error, Type 'number' is not assignable to type 'string'
        var y = x;
    }
}

struct D<T, U> {
    constructor(x: T, y: U);
    constructor(x: T = 1, public y: U = x) { // error, Type 'number' is not assignable to type 'T'.
											//  Type 'T' is not assignable to type 'U'
        var z = x;
    }
}

//// [structConstructorImplementationWithDefaultValues2_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor(x) {
        if (x === void 0) { x = 1; }
        this.x = x;
        var y = x;
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
    });
    function _ctor(x, y) {
        if (x === void 0) { x = 1; }
        if (y === void 0) { y = x; }
        this.y = y;
        //  Type 'T' is not assignable to type 'U'
        var z = x;
    }
    function D(x, y) {
        var obj = new _D();
        _ctor.call(obj ,x, y);
        return obj;
    }
    return D;
})();

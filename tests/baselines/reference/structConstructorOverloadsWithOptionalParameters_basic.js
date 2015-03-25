//// [structConstructorOverloadsWithOptionalParameters_basic.ts]
// optional parameters can exist in constructor overloads
// no errors

struct C {
    foo: string;
    constructor(x?, y?: any[]); 
    constructor() {
    }
}

struct D<T> {
    foo: string;
    constructor(x?, y?: any[]); 
    constructor() {
    }
}

//// [structConstructorOverloadsWithOptionalParameters_basic.js]
// optional parameters can exist in constructor overloads
// no errors
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

//// [structWithTwoConstructorDefinitions_basic.ts]
// Multiple constructor implementations are not allowed
struct C {
    constructor() { } // error
    constructor(x) { } // error
}

class D<T> {
    constructor(x: T) { } // error
    constructor(x: T, y: T) { } // error
}

//// [structWithTwoConstructorDefinitions_basic.js]
// Multiple constructor implementations are not allowed
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor() {
    } // error
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    C._TO = _C;
    return C;
})();
var D = (function () {
    function D(x) {
    } // error
    return D;
})();

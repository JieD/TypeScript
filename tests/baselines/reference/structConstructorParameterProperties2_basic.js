//// [structConstructorParameterProperties2_basic.ts]
struct C {
    y: number;
    constructor(y: number) { } // ok
}

var c: C;
var r = c.y;

struct D {
    y: number;
    constructor(public y: number) { } // error, Duplicate identifier 'y'
}

var d: D;
var r2 = d.y;

struct E {
    y: number;
    constructor(private y: number) { } // error, Duplicate identifier 'y'
}

var e: E;
var r3 = e.y; // error

struct F {
    y: number;
    constructor(protected y: number) { } // error, Duplicate identifier 'y'
}

var f: F;
var r4 = f.y; // error


//// [structConstructorParameterProperties2_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
        y: TypedObject.float64,
    });
    function _ctor(y) {
    } // ok
    function C(y) {
        var obj = new _C();
        _ctor.call(obj ,y);
        return obj;
    }
    C._TO = _C;
    return C;
})();
var c;
var r = c.y;
var D = (function () {
    var _D = new TypedObject.StructType({
        y: TypedObject.float64,
    });
    function _ctor(y) {
        this.y = y;
    } // error, Duplicate identifier 'y'
    function D(y) {
        var obj = new _D();
        _ctor.call(obj ,y);
        return obj;
    }
    D._TO = _D;
    return D;
})();
var d;
var r2 = d.y;
var E = (function () {
    var _E = new TypedObject.StructType({
        y: TypedObject.float64,
    });
    function _ctor(y) {
        this.y = y;
    } // error, Duplicate identifier 'y'
    function E(y) {
        var obj = new _E();
        _ctor.call(obj ,y);
        return obj;
    }
    E._TO = _E;
    return E;
})();
var e;
var r3 = e.y; // error
var F = (function () {
    var _F = new TypedObject.StructType({
        y: TypedObject.float64,
    });
    function _ctor(y) {
        this.y = y;
    } // error, Duplicate identifier 'y'
    function F(y) {
        var obj = new _F();
        _ctor.call(obj ,y);
        return obj;
    }
    F._TO = _F;
    return F;
})();
var f;
var r4 = f.y; // error

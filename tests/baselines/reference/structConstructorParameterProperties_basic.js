//// [structConstructorParameterProperties_basic.ts]
struct C {
    y: string;
    constructor(private x: string, protected z: string) { }
}

var c: C;
var r = c.y;
var r2 = c.x; // error, Property 'x' is private and only accessible within struct 'C'
var r3 = c.z; // error, Property 'z' is protected and only accessible within struct 'C' and its substructes

struct D<T> {
    y: T;
    constructor(a: T, private x: T, protected z: T) { }
}

var d: D<string>;
var r = d.y;
var r2 = d.x; // error
var r3 = d.a; // error, Property 'a' does not exist on type 'D<string>'
var r4 = d.z; // error


//// [structConstructorParameterProperties_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
        y: TypedObject.string,
    });
    function _ctor(x, z) {
        this.x = x;
        this.z = z;
    }
    function C(x, z) {
        var obj = new _C();
        _ctor.call(obj ,x, z);
        return obj;
    }
    C._TO = _C;
    return C;
})();
var c;
var r = c.y;
var r2 = c.x; // error, Property 'x' is private and only accessible within struct 'C'
var r3 = c.z; // error, Property 'z' is protected and only accessible within struct 'C' and its substructes
var D = (function () {
    var _D = new TypedObject.StructType({
        y: TypedObject.Object,
    });
    function _ctor(a, x, z) {
        this.x = x;
        this.z = z;
    }
    function D(a, x, z) {
        var obj = new _D();
        _ctor.call(obj ,a, x, z);
        return obj;
    }
    D._TO = _D;
    return D;
})();
var d;
var r = d.y;
var r2 = d.x; // error
var r3 = d.a; // error, Property 'a' does not exist on type 'D<string>'
var r4 = d.z; // error

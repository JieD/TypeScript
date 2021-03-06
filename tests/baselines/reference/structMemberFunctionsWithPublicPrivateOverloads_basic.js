//// [structMemberFunctionsWithPublicPrivateOverloads_basic.ts]
struct C {
    private foo(x: number);
    public foo(x: number, y: string); // error
    private foo(x: any, y?: any) { }

    private bar(x: 'hi');
    public bar(x: string); // error
    private bar(x: number, y: string);
    private bar(x: any, y?: any) { }

    private static foo(x: number);
    public static foo(x: number, y: string); // error
    private static foo(x: any, y?: any) { }

    protected baz(x: string); // error
    protected baz(x: number, y: string); // error
    private baz(x: any, y?: any) { }

    private static bar(x: 'hi');
    public static bar(x: string); // error
    private static bar(x: number, y: string);
    private static bar(x: any, y?: any) { }

    protected static baz(x: 'hi');
    public static baz(x: string); // error
    protected static baz(x: number, y: string);
    protected static baz(x: any, y?: any) { }
}

struct D<T> {
    private foo(x: number); 
    public foo(x: T, y: T); // error
    private foo(x: any, y?: any) { }

    private bar(x: 'hi');
    public bar(x: string); // error
    private bar(x: T, y: T);
    private bar(x: any, y?: any) { }

    private baz(x: string); 
    protected baz(x: number, y: string); // error
    private baz(x: any, y?: any) { }

    private static foo(x: number);
    public static foo(x: number, y: string); // error
    private static foo(x: any, y?: any) { }

    private static bar(x: 'hi');
    public static bar(x: string); // error
    private static bar(x: number, y: string);
    private static bar(x: any, y?: any) { }

    public static baz(x: string); // error
    protected static baz(x: number, y: string);
    protected static baz(x: any, y?: any) { }
}

var c: C;
var r = c.foo(1); // error

var d: D<number>;
var r2 = d.foo(2); // error

//// [structMemberFunctionsWithPublicPrivateOverloads_basic.js]
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
    _C.prototype.foo = function (x, y) {
    };
    _C.prototype.bar = function (x, y) {
    };
    _C.foo = function (x, y) {
    };
    _C.prototype.baz = function (x, y) {
    };
    _C.bar = function (x, y) {
    };
    _C.baz = function (x, y) {
    };
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    D._TO = _D;
    _D.prototype.foo = function (x, y) {
    };
    _D.prototype.bar = function (x, y) {
    };
    _D.prototype.baz = function (x, y) {
    };
    _D.foo = function (x, y) {
    };
    _D.bar = function (x, y) {
    };
    _D.baz = function (x, y) {
    };
    return D;
})();
var c;
var r = c.foo(1); // error
var d;
var r2 = d.foo(2); // error

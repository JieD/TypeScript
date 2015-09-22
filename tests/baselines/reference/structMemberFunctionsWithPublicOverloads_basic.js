//// [structMemberFunctionsWithPublicOverloads_basic.ts]
struct C {
    public foo(x: number);
    public foo(x: number, y: string);
    public foo(x: any, y?: any) { }

    public bar(x: 'hi');
    public bar(x: string);
    public bar(x: number, y: string);
    public bar(x: any, y?: any) { }

    public static foo(x: number);
    public static foo(x: number, y: string);
    public static foo(x: any, y?: any) { }

    public static bar(x: 'hi');
    public static bar(x: string);
    public static bar(x: number, y: string);
    public static bar(x: any, y?: any) { }
}

struct D<T> {
    public foo(x: number);
    public foo(x: T, y: T);
    public foo(x: any, y?: any) { }

    public bar(x: 'hi');
    public bar(x: string);
    public bar(x: T, y: T);
    public bar(x: any, y?: any) { }

    public static foo(x: number);
    public static foo(x: number, y: string);
    public static foo(x: any, y?: any) { }

    public static bar(x: 'hi');
    public static bar(x: string);
    public static bar(x: number, y: string);
    public static bar(x: any, y?: any) { }

}

//// [structMemberFunctionsWithPublicOverloads_basic.js]
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
    _C.bar = function (x, y) {
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
    _D.foo = function (x, y) {
    };
    _D.bar = function (x, y) {
    };
    return D;
})();

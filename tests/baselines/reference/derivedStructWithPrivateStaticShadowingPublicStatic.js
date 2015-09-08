//// [derivedStructWithPrivateStaticShadowingPublicStatic.ts]
// doc 2.3

struct Base {
    public static x: string;
    public static fn(): string {
        return '';
    }
}

struct Derived extends Base {
    private static x: string; 
    private static fn(): string {
        return '';
    }
}

var b: typeof Base;
var d: typeof Derived;
var r = b.x; // ok
var r2 = d.x; // error

var r3 = b.fn(); // ok
var r4 = d.fn(); // error

//// [derivedStructWithPrivateStaticShadowingPublicStatic.js]
// doc 2.3
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    var _Base = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function Base() {
        var obj = new _Base();
        _ctor.call(obj);
        return obj;
    }
    Base.fn = function () {
        return '';
    };
    return Base;
})();
var Derived = (function () {
    var _Derived = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function Derived() {
        var obj = new _Derived();
        _ctor.call(obj);
        return obj;
    }
    Derived.fn = function () {
        return '';
    };
    return Derived;
})();
var b;
var d;
var r = b.x; // ok
var r2 = d.x; // error
var r3 = b.fn(); // ok
var r4 = d.fn(); // error

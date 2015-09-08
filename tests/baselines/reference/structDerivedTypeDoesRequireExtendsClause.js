//// [structDerivedTypeDoesRequireExtendsClause.ts]
struct Base {
    foo: string;
}

struct Derived {
    foo: string;
    bar: number;
}

struct Derived2 extends Base {
    bar: string;
}

var b: Base;
var d1: Derived;
var d2: Derived2;
b = d1; // error, not structural typing
b = d2;

var r: Base[] = [d1, d2]; // error, not structural typing

//// [structDerivedTypeDoesRequireExtendsClause.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    var _Base = new TypedObject.StructType({
        foo: TypedObject.string
    });
    function _ctor() {
    }
    function Base() {
        var obj = new _Base();
        _ctor.call(obj);
        return obj;
    }
    return Base;
})();
var Derived = (function () {
    var _Derived = new TypedObject.StructType({
        foo: TypedObject.string,
        bar: TypedObject.float64
    });
    function _ctor() {
    }
    function Derived() {
        var obj = new _Derived();
        _ctor.call(obj);
        return obj;
    }
    return Derived;
})();
var Derived2 = (function () {
    var _Derived2 = new TypedObject.StructType({
        bar: TypedObject.string
    });
    function _ctor() {
    }
    function Derived2() {
        var obj = new _Derived2();
        _ctor.call(obj);
        return obj;
    }
    return Derived2;
})();
var b;
var d1;
var d2;
b = d1; // error, not structural typing
b = d2;
var r = [d1, d2]; // error, not structural typing

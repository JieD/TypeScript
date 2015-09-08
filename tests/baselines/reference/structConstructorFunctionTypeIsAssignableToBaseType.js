//// [structConstructorFunctionTypeIsAssignableToBaseType.ts]
struct Base {
    static foo: {
        bar: Object;
    }
}

struct Derived extends Base {
    // ok
    static foo: {
        bar: number;
    }
}

struct Derived2 extends Base {
    // ok
    static foo: {
        bar: any;
    }
}

//// [structConstructorFunctionTypeIsAssignableToBaseType.js]
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
    return Derived;
})();
var Derived2 = (function () {
    var _Derived2 = new TypedObject.StructType({
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

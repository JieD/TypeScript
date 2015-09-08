//// [derivedStructCannotOverrideInstanceMemberVariables.ts]
// doc 2.3
// only public function members can be overridden.

struct Base {
    private x: { foo: string };
}

struct Derived extends Base {
    private x: { foo: string; bar: string; }; // error
}

struct Base1 {
	public foo: any;
}

struct Derived1 extends Base1 {
	public foo: string; // error}
}

struct Base2 {
	static y: { foo: string };
}

struct Derived2 extends Base2 {
	static y: { foo: string; bar: string; }; // ok
}

struct Derived3 extends Base2 {
	static y: { foo: any }; // ok
}

//// [derivedStructCannotOverrideInstanceMemberVariables.js]
// doc 2.3
// only public function members can be overridden.
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    var _Base = new TypedObject.StructType({
        x: TypedObject.Object
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
        x: TypedObject.Object
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
var Base1 = (function () {
    var _Base1 = new TypedObject.StructType({
        foo: TypedObject.Any
    });
    function _ctor() {
    }
    function Base1() {
        var obj = new _Base1();
        _ctor.call(obj);
        return obj;
    }
    return Base1;
})();
var Derived1 = (function () {
    var _Derived1 = new TypedObject.StructType({
        foo: TypedObject.string
    });
    function _ctor() {
    }
    function Derived1() {
        var obj = new _Derived1();
        _ctor.call(obj);
        return obj;
    }
    return Derived1;
})();
var Base2 = (function () {
    var _Base2 = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function Base2() {
        var obj = new _Base2();
        _ctor.call(obj);
        return obj;
    }
    return Base2;
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
var Derived3 = (function () {
    var _Derived3 = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function Derived3() {
        var obj = new _Derived3();
        _ctor.call(obj);
        return obj;
    }
    return Derived3;
})();

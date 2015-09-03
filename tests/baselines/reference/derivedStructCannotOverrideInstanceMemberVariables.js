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
    function Base() {
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.apply(this, arguments);
    }
    return Derived;
})(Base);
var Base1 = (function () {
    function Base1() {
    }
    return Base1;
})();
var Derived1 = (function (_super) {
    __extends(Derived1, _super);
    function Derived1() {
        _super.apply(this, arguments);
    }
    return Derived1;
})(Base1);
var Base2 = (function () {
    function Base2() {
    }
    return Base2;
})();
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        _super.apply(this, arguments);
    }
    return Derived2;
})(Base2);
var Derived3 = (function (_super) {
    __extends(Derived3, _super);
    function Derived3() {
        _super.apply(this, arguments);
    }
    return Derived3;
})(Base2);

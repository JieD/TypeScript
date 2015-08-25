//// [structConstructorFunctionTypeIsAssignableToBaseType2.ts]
// the constructor function itself does not need to be a subtype of the base type constructor function

struct Base {
    static foo: {
        bar: Object;
    }
    constructor(x: Object) {
    }
}

struct Derived extends Base {
    // ok
    static foo: {
        bar: number;
    }

    constructor(x: number) { // ok
        super(x);
    }
}

struct Derived2 extends Base {   
    static foo: {
        bar: number;
    }

    // ok, not enforcing assignability relation on this
    constructor(x: any) {
        super(x);
        return 1; // return expression not allowed
    }
}

//// [structConstructorFunctionTypeIsAssignableToBaseType2.js]
// the constructor function itself does not need to be a subtype of the base type constructor function
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base(x) {
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived(x) {
        _super.call(this, x);
    }
    return Derived;
})(Base);
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    // ok, not enforcing assignability relation on this
    function Derived2(x) {
        _super.call(this, x);
        return 1; // return expression not allowed
    }
    return Derived2;
})(Base);

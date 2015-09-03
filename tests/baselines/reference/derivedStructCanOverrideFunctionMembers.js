//// [derivedStructCanOverrideFunctionMembers.ts]
// doc 2.3
// derived struct can only override base struct's instance function members and static property members

var x: { foo: string; }
var y: { foo: string; bar: string; }

struct Base {
    a: typeof x;
    b(a: typeof x) { }
    d: (a: typeof x) => void;

    static r: typeof x;
    static s(a: typeof x) { }
    static u: (a: typeof x) => void;

    constructor(a: typeof x) { }
}

struct Derived extends Base {
    a: typeof y; // error
    b(a: typeof y) { } // ok
    d: (a: typeof y) => void; // ok

    static r: typeof y; // ok
    static s(a: typeof y) { } // ok
    static u: (a: typeof y) => void; // ok

    constructor(a: typeof y) { super(x) }
}


/* struct Base2 {
    [i: string]: Object;
    [i: number]: typeof x;
}

struct Derived2 extends Base2 {
    [i: string]: typeof x;
    [i: number]: typeof y;
}

var d2: Derived2;
var r7 = d2[''];
var r8 = d2[1]; */



//// [derivedStructCanOverrideFunctionMembers.js]
// doc 2.3
// derived struct can only override base struct's instance function members and static property members
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var x;
var y;
var Base = (function () {
    function Base(a) {
    }
    Base.prototype.b = function (a) {
    };
    Base.s = function (a) {
    };
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived(a) {
        _super.call(this, x);
    }
    Derived.prototype.b = function (a) {
    }; // ok
    Derived.s = function (a) {
    }; // ok
    return Derived;
})(Base);

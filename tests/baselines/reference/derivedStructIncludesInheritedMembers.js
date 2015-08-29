//// [derivedStructIncludesInheritedMembers.ts]
// doc 2.3
// A derived struct inherits all members from its base struct it doesn’t override.
// all ok

struct Base {
    a: string;
    b() { }

    static r: string;
    static s() { }

    constructor(x) { }
}

struct Derived extends Base {
}

var d: Derived = new Derived(1);
var r1 = d.a;
var r2 = d.b();
var r3 = Derived.r;
var r4 = Derived.s();


//// [derivedStructIncludesInheritedMembers.js]
// doc 2.3
// A derived struct inherits all members from its base struct it doesn’t override.
// all ok
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base(x) {
    }
    Base.prototype.b = function () {
    };
    Base.s = function () {
    };
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.apply(this, arguments);
    }
    return Derived;
})(Base);
var d = new Derived(1);
var r1 = d.a;
var r2 = d.b();
var r3 = Derived.r;
var r4 = Derived.s();

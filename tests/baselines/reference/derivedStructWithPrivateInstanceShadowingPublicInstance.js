//// [derivedStructWithPrivateInstanceShadowingPublicInstance.ts]
// doc 2.3

struct Base {
    public fn(): string {
        return '';
    }
}

// error, not a subtype
struct Derived extends Base {
    private fn(): string {
        return '';
    }
}

var b: Base;
var d: Derived;

var r1 = b.fn(); // ok
var r2 = d.fn(); // error
var r3 = (<Base>d).fn; // ok

//// [derivedStructWithPrivateInstanceShadowingPublicInstance.js]
// doc 2.3
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base() {
    }
    Base.prototype.fn = function () {
        return '';
    };
    return Base;
})();
// error, not a subtype
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.apply(this, arguments);
    }
    Derived.prototype.fn = function () {
        return '';
    };
    return Derived;
})(Base);
var b;
var d;
var r1 = b.fn(); // ok
var r2 = d.fn(); // error
var r3 = d.fn; // ok

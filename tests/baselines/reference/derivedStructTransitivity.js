//// [derivedStructTransitivity.ts]
// doc 2.3
// The type of an overriding property member doesn’t need to be assignable to the type of the overridden property member

struct C {
    foo(x: number) { }
}

struct D extends C {
    foo() { } // ok to drop parameters, function override
}

struct E extends D {
    foo(x?: string) { } // ok to add optional parameters
}

var c: C;
var d: D;
var e: E;
c = d; // ok
c = e; // ok

var r = c.foo(1);
var r2 = e.foo('');
r2 = e.foo();
r2 = e.foo(1); // error, not match
r2 = (<C>e).foo(1); // ok

//// [derivedStructTransitivity.js]
// doc 2.3
// The type of an overriding property member doesn’t need to be assignable to the type of the overridden property member
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C() {
    }
    C.prototype.foo = function (x) {
    };
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    D.prototype.foo = function () {
    }; // ok to drop parameters, function override
    return D;
})(C);
var E = (function (_super) {
    __extends(E, _super);
    function E() {
        _super.apply(this, arguments);
    }
    E.prototype.foo = function (x) {
    }; // ok to add optional parameters
    return E;
})(D);
var c;
var d;
var e;
c = d; // ok
c = e; // ok
var r = c.foo(1);
var r2 = e.foo('');
r2 = e.foo();
r2 = e.foo(1); // error, not match
r2 = e.foo(1); // ok

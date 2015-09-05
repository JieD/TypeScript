//// [structInstanceTypeIsAssignableToBaseType.ts]
// doc 1.1
// Because struct uses nominal typing, the instance type of the declared struct doesn’t need to be
// assignable to the base type reference. However, member variables override is not allowed.
// ok

struct C {
	foo: string;
	thing(): string {
		return "1";
	}
}

struct D extends C {
	thing(): number {
		return 1;  // ok
	}
}

var c: C;
var d: D;
c = d;

//// [structInstanceTypeIsAssignableToBaseType.js]
// doc 1.1
// Because struct uses nominal typing, the instance type of the declared struct doesn’t need to be
// assignable to the base type reference. However, member variables override is not allowed.
// ok
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C() {
    }
    C.prototype.thing = function () {
        return "1";
    };
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    D.prototype.thing = function () {
        return 1; // ok
    };
    return D;
})(C);
var c;
var d;
c = d;

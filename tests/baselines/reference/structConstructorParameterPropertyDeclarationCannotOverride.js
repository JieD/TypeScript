//// [structConstructorParameterPropertyDeclarationCannotOverride.ts]
// doc 3.1
// derived struct cannot override inherited member variables from base struct

struct Base {
    constructor(public x: number) { }
}

struct Derived extends Base {
	constructor(public x: number) { // cannot overrides inherited member variables
        super(x);
        this.x; // OK
    }
}

struct Derived1 extends Base {
	constructor(public y: number) { // ok
		super(y);
		this.x; // OK
		this.y; // OK
	}
}

var d: Derived1;
d.x;  // public, OK

//// [structConstructorParameterPropertyDeclarationCannotOverride.js]
// doc 3.1
// derived struct cannot override inherited member variables from base struct
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base(x) {
        this.x = x;
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived(x) {
        _super.call(this, x);
        this.x = x;
        this.x; // OK
    }
    return Derived;
})(Base);
var Derived1 = (function (_super) {
    __extends(Derived1, _super);
    function Derived1(y) {
        _super.call(this, y);
        this.y = y;
        this.x; // OK
        this.y; // OK
    }
    return Derived1;
})(Base);
var d;
d.x; // public, OK

//// [derivedStructWithoutExplicitConstructor2.ts]
// doc 3.3
// In a derived struct, the automatic constructor has the same parameter list
// (and possibly overloads) as the base struct constructor.
// automatic constructors with a struct hieararchy of depth > 2

struct Base {
    a = 1;
    constructor(x: number) { this.a = x; }
}

struct Derived extends Base {
    b = '';
    constructor(y: string, z: string) {
        super(2);
        this.b = y;
    }
}

struct Derived2 extends Derived {
    x = 1
    y = 'hello';
}

var r = new Derived(); // error, Supplied parameters do not match any signature of call target.
var r2 = new Derived2(1); // error, Supplied parameters do not match any signature of call target.
var r3 = new Derived('', '');

/* struct Base2<T> {
    a: T;
    constructor(x: T) { this.a = x; }
}

struct D<T> extends Base {
    b: T = null;
    constructor(y: T, z: T) {
        super(2);
        this.b = y;
    }
}


struct D2<T extends Date> extends D<T> {
    x = 2
    y: T = null;
}

var d = new D2(); // error, Supplied parameters do not match any signature of call target.
var d2 = new D2(new Date()); // error, Supplied parameters do not match any signature of call target.
var d3 = new D2(new Date(), new Date()); // ok
    */

//// [derivedStructWithoutExplicitConstructor2.js]
// doc 3.3
// In a derived struct, the automatic constructor has the same parameter list
// (and possibly overloads) as the base struct constructor.
// automatic constructors with a struct hieararchy of depth > 2
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base(x) {
        this.a = 1;
        this.a = x;
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived(y, z) {
        _super.call(this, 2);
        this.b = '';
        this.b = y;
    }
    return Derived;
})(Base);
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        _super.apply(this, arguments);
        this.x = 1;
        this.y = 'hello';
    }
    return Derived2;
})(Derived);
var r = new Derived(); // error, Supplied parameters do not match any signature of call target.
var r2 = new Derived2(1); // error, Supplied parameters do not match any signature of call target.
var r3 = new Derived('', '');

//// [derivedStructConstructorWithoutSuperCall.ts]
// doc 3.2
// derived struct constructors must contain a super call

struct Base {
    x: string;
}

struct Derived extends Base {
    constructor() { // error
    }
}

struct Base2 {
    x: any;
}

struct Derived2 extends Base2 {
    constructor() { // error for no super call (nested scopes don't count)
        var r2 = () => super(); // error for misplaced super call (nested function)
    }
}

struct Derived3 extends Base2 {
    constructor() { // error
        var r = function () { super() } // error
    }
}

struct Derived4 extends Base2 {
    constructor() {
        var r = super(); // ok
    }
}

//// [derivedStructConstructorWithoutSuperCall.js]
// doc 3.2
// derived struct constructors must contain a super call
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
    }
    return Derived;
})(Base);
var Base2 = (function () {
    function Base2() {
    }
    return Base2;
})();
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        var r2 = function () { return _super.call(this); }; // error for misplaced super call (nested function)
    }
    return Derived2;
})(Base2);
var Derived3 = (function (_super) {
    __extends(Derived3, _super);
    function Derived3() {
        var r = function () {
            _super.call(this);
        }; // error
    }
    return Derived3;
})(Base2);
var Derived4 = (function (_super) {
    __extends(Derived4, _super);
    function Derived4() {
        var r = _super.call(this); // ok
    }
    return Derived4;
})(Base2);

//// [structConstructorParametersAccessibility2.ts]
// doc 3.1
// optional parameters are not allowed for struct constructor.

struct C1 {
    constructor(public x?: number) { } // error
}

struct C2 {
    constructor(private p?: number) { } // error
}

struct C3 {
    constructor(protected p?: number) { } // error
}

struct Derived extends C3 {
    constructor(p: number) {
        super(p);
        this.p; // OK
    }
}


//// [structConstructorParametersAccessibility2.js]
// doc 3.1
// optional parameters are not allowed for struct constructor.
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C1 = (function () {
    function C1(x) {
        this.x = x;
    } // error
    return C1;
})();
var C2 = (function () {
    function C2(p) {
        this.p = p;
    } // error
    return C2;
})();
var C3 = (function () {
    function C3(p) {
        this.p = p;
    } // error
    return C3;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived(p) {
        _super.call(this, p);
        this.p; // OK
    }
    return Derived;
})(C3);

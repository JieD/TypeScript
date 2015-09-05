//// [structConstructorParametersNotOverride.ts]
// doc 3.1
// parameter property declaration cannot override inherited member variables from base struct

struct C {
    constructor(private p: number) { }
}

struct Derived extends C {
    constructor(public p: number) { // error
        super(p);
    }
}


//// [structConstructorParametersNotOverride.js]
// doc 3.1
// parameter property declaration cannot override inherited member variables from base struct
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C(p) {
        this.p = p;
    }
    return C;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived(p) {
        _super.call(this, p);
        this.p = p;
    }
    return Derived;
})(C);

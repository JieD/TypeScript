//// [structWithStaticMembers.ts]
// doc 2.5
// ok

struct C {
    static fn() { return this; }
    constructor(public a: number, private b: number) { }
    static foo: string; 
}

var r = C.fn();
var r2 = r.foo;

struct D extends C {
    bar: string;
}

var r = D.fn();
var r2 = r.foo;

//// [structWithStaticMembers.js]
// doc 2.5
// ok
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C(a, b) {
        this.a = a;
        this.b = b;
    }
    C.fn = function () {
        return this;
    };
    return C;
})();
var r = C.fn();
var r2 = r.foo;
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    return D;
})(C);
var r = D.fn();
var r2 = r.foo;

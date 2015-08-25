//// [structExtendingStruct.ts]
struct C {
    foo: string;
    thing() { }
    static other() { }
}

struct D extends C {
    bar: string;
}

var d: D;
var r = d.foo;
var r2 = d.bar;
var r3 = d.thing();
var r4 = D.other();

/* struct C2<T> {
    foo: T;
    thing(x: T) { }
    static other<T>(x: T) { }
}

struct D2<T> extends C2<T> {
    bar: string;
}

var d2: D2<string>;
var r5 = d2.foo;
var r6 = d2.bar;
var r7 = d2.thing('');
var r8 = D2.other(1); */

//// [structExtendingStruct.js]
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
    };
    C.other = function () {
    };
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    return D;
})(C);
var d;
var r = d.foo;
var r2 = d.bar;
var r3 = d.thing();
var r4 = D.other();

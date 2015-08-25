//// [classNotExtendingStruct.ts]
struct S {
	bar: string;
}

class C extends S { // error, class may only extend class
	foo: string;
}


//// [classNotExtendingStruct.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var S = (function () {
    function S() {
    }
    return S;
})();
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(S);

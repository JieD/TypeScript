//// [structExtendsItself.ts]
struct C extends C { } // error

// struct D<T> extends D<T> { } //  error

// struct E<T> extends E<string> { } // error

//// [structExtendsItself.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(C); // error

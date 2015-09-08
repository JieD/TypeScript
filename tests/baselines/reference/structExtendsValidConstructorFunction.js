//// [structExtendsValidConstructorFunction.ts]
function foo() { }

var x = new foo(); // can be used as a constructor function

struct C extends foo { } // error, cannot extend it though

//// [structExtendsValidConstructorFunction.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function foo() {
}
var x = new foo(); // can be used as a constructor function
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    return C;
})();
 // error, cannot extend it though

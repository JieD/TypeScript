//// [structExtendsShadowedConstructorFunction.ts]
struct C { foo: string; }

module M {
    var C = 1;
    struct D extends C { // error, C must evaluate to constructor function
        bar: string;
    }
}

//// [structExtendsShadowedConstructorFunction.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    var _C = new TypedObject.StructType({
        foo: TypedObject.string
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
var M;
(function (M) {
    var C = 1;
    var D = (function () {
        var _D = new TypedObject.StructType({
            bar: TypedObject.string
        });
        function _ctor() {
        }
        function D() {
            var obj = new _D();
            _ctor.call(obj);
            return obj;
        }
        return D;
    })();
})(M || (M = {}));

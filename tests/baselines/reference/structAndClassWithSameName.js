//// [structAndClassWithSameName.ts]
struct C { foo: string; }
class C { foo: string; } // error

module M {
    struct D {
        bar: string;
    }

    class D { // error
        bar: string;
    }
}

//// [structAndClassWithSameName.js]
var _C = (function () {
    var _C = new TypedObject.StructType({
        foo: TypedObject.string
    });
    return _C
})();
function C() {
    var _this = new _C();
    return _this;
}
var C = (function () {
    function C() {
    }
    return C;
})(); // error
var M;
(function (M) {
    var _D = (function () {
        var _D = new TypedObject.StructType({
            bar: TypedObject.string
        });
        return _D
    })();
    function D() {
        var _this = new _D();
        return _this;
    }
    var D = (function () {
        function D() {
        }
        return D;
    })();
})(M || (M = {}));

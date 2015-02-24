//// [structAndVariableWithSameName.ts]
struct C { foo: string; } // error
var C = ''; // error

module M {
    struct D { // error
        bar: string;
    }

    var D = 1; // error
}

//// [structAndVariableWithSameName.js]
var _C = (function () {
    var _C = new TypedObject.StructType({
        foo: TypedObject.string
    });
    return _C
})();
function C() {
    var _this = new _C();
    return _this;
} // error
var C = ''; // error
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
    var D = 1; // error
})(M || (M = {}));

//// [structAndInterfaceWithSameName.ts]
struct C { foo: string; }
interface C { foo: string; } // error

module M {
    struct D {
        bar: string;
    }

    interface D { // error
        bar: string;
    }
}

//// [structAndInterfaceWithSameName.js]
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
})(M || (M = {}));

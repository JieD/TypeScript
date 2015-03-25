//// [structPrivateStaticNotAccessibleInModule_basic.ts]
// Any attempt to access a private property member outside the struct body that contains its declaration results in a compile-time error.

struct C {
    private foo: string;
    private static bar: string;
}

module C {
    export var y = C.bar; // error
}

//// [structPrivateStaticNotAccessibleInModule_basic.js]
// Any attempt to access a private property member outside the struct body that contains its declaration results in a compile-time error.
var C = (function () {
    var _C = new TypedObject.StructType({
        foo: TypedObject.string,
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
var C;
(function (C) {
    C.y = C.bar; // error
})(C || (C = {}));

//// [structStaticMemberInitialization_basic.ts]
// ok

struct C {
    static x = 1;
}

var c = new C();
var r = C.x;

//// [structStaticMemberInitialization_basic.js]
// ok
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
    C.x = 1;
    return C;
})();
var c = new C();
var r = C.x;

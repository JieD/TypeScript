//// [structInstanceMemberInitialization_basic.ts]
// ok

struct C {
    x = 1;
}

var c = new C();
c.x = 3;
var c2 = new C();
var r = c.x === c2.x;

//// [structInstanceMemberInitialization_basic.js]
// ok
var C = (function () {
    var _C = new TypedObject.StructType({
        x: TypedObject.float64
    });
    function _ctor() {
        this.x = 1;
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    C._TO = _C;
    return C;
})();
var c = new C();
c.x = 3;
var c2 = new C();
var r = c.x === c2.x;

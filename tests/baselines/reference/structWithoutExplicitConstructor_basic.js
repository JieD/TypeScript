//// [structWithoutExplicitConstructor_basic.ts]
struct C {
    x = 1
    y = 'hello';
}

var c = new C();
var c2 = new C(null); // error, Supplied parameters do not match any signature of call target

//// [structWithoutExplicitConstructor_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.string
    });
    function _ctor() {
        this.x = 1;
        this.y = 'hello';
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    return C;
})();
var c = new C();
var c2 = new C(null); // error, Supplied parameters do not match any signature of call target

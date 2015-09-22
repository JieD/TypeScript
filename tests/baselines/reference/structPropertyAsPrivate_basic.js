//// [structPropertyAsPrivate_basic.ts]
struct C {
    private x: string;
    //private get y() { return null; }
    //private set y(x) { }
    private foo() { }

    private static a: string;
   // private static get b() { return null; }
    //private static set b(x) { }
    private static foo() { }
}

var c: C;
// all errors
c.x;
//c.y;
//c.y = 1;
c.foo();

C.a;
//C.b();
//C.b = 1;
C.foo();

//// [structPropertyAsPrivate_basic.js]
var C = (function () {
    var _C = new TypedObject.StructType({
        x: TypedObject.string,
    });
    function _ctor() {
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    C._TO = _C;
    //private get y() { return null; }
    //private set y(x) { }
    _C.prototype.foo = function () {
    };
    // private static get b() { return null; }
    //private static set b(x) { }
    _C.foo = function () {
    };
    return C;
})();
var c;
// all errors
c.x;
//c.y;
//c.y = 1;
c.foo();
C.a;
//C.b();
//C.b = 1;
C.foo();

//// [structPropertyIsPublicByDefault_basic.ts]
struct C {
    x: string;
    // get y() { return null; }
    // set y(x) { }
    foo() { }

    static a: string;
    // static get b() { return null; }
    // static set b(x) { }
    static foo() { }
}

var c: C;
c.x;
//c.y;
//c.y = 1;
c.foo();

C.a;
//C.b();
//C.b = 1;
C.foo();

//// [structPropertyIsPublicByDefault_basic.js]
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
    // get y() { return null; }
    // set y(x) { }
    _C.prototype.foo = function () {
    };
    // static get b() { return null; }
    // static set b(x) { }
    _C.foo = function () {
    };
    return C;
})();
var c;
c.x;
//c.y;
//c.y = 1;
c.foo();
C.a;
//C.b();
//C.b = 1;
C.foo();

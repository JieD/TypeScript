//// [typeOfThisInStructInstanceMember_basic.ts]
// Within constructors, instance member functions and instance member accessors, the type of this
// is the instance type of the sturct.

struct C {
    x = this;
    foo() {
        return this;
    }
    constructor(x: number) {
        var t = this;
        t.x;
        t.z; // error, z doesn't exist.
        var r = t.foo();
    }
}

var c: C;
// all ok
var r = c.x;
var ra = c.x.x.x;
var r2 = c.foo();
var rs = [r, r2];

rs.forEach(x => {
    x.foo;
    x.x;
});

//// [typeOfThisInStructInstanceMember_basic.js]
// Within constructors, instance member functions and instance member accessors, the type of this
// is the instance type of the sturct.
var C = (function () {
    var _C = new TypedObject.StructType({
        x: TypedObject.Object,
    });
    function _ctor(x) {
        this.x = this;
        var t = this;
        t.x;
        t.z; // error, z doesn't exist.
        var r = t.foo();
    }
    function C(x) {
        var obj = new _C();
        _ctor.call(obj ,x);
        return obj;
    }
    C.prototype.foo = function () {
        return this;
    };
    return C;
})();
var c;
// all ok
var r = c.x;
var ra = c.x.x.x;
var r2 = c.foo();
var rs = [r, r2];
rs.forEach(function (x) {
    x.foo;
    x.x;
});

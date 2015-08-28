//// [structTypeOfThisInInstanceMember2.ts]
struct C<T> {
    x = this;
    foo() {
        return this;
    }
    constructor(x: T) {
        var t = this;
        t.x;
        t.z;
        var r = t.foo();
    }
    z: T;
}

var c: C<string>;
// all ok
var r = c.x;
var ra = c.x.x.x;
var r3 = c.foo();
var r4 = c.z;
var rs = [r, r3];

rs.forEach(x => {
    x.foo;
    x.x;
    x.z;
});

//// [structTypeOfThisInInstanceMember2.js]
var C = (function () {
    function C(x) {
        this.x = this;
        var t = this;
        t.x;
        t.z;
        var r = t.foo();
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
var r3 = c.foo();
var r4 = c.z;
var rs = [r, r3];
rs.forEach(function (x) {
    x.foo;
    x.x;
    x.z;
});

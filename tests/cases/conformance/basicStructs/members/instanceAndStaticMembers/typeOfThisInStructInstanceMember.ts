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
//// [structPropertyIsPublicByDefault.ts]
// doc 2.2
// all ok

struct C {
    x: string;
    foo() { }

    static a: string;
    static foo() { }
}

var c: C;
c.x;
c.foo();

C.a;
C.foo();

//// [structPropertyIsPublicByDefault.js]
// doc 2.2
// all ok
var C = (function () {
    function C() {
    }
    C.prototype.foo = function () {
    };
    C.foo = function () {
    };
    return C;
})();
var c;
c.x;
c.foo();
C.a;
C.foo();

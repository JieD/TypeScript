//// [structPropertyAsPrivate.ts]
// doc 2.2
// private property members can be accessed only within the struct body that contains their declaration

struct C {
    private x: string;
    private foo() { }

    private static a: string;
    private static foo() { }
}

var c: C;
// all errors
c.x;
c.foo();

C.a;
C.foo();

//// [structPropertyAsPrivate.js]
// doc 2.2
// private property members can be accessed only within the struct body that contains their declaration
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
// all errors
c.x;
c.foo();
C.a;
C.foo();

//// [structTypeOfThisInStaticMembers2.ts]
struct C {
    static foo = this; // error, 'this' cannot be referenced in a static property initializer.
}

struct C2<T> {
    static foo = this; // error
}

//// [structTypeOfThisInStaticMembers2.js]
var C = (function () {
    function C() {
    }
    C.foo = this; // error, 'this' cannot be referenced in a static property initializer.
    return C;
})();
var C2 = (function () {
    function C2() {
    }
    C2.foo = this; // error
    return C2;
})();

//// [structConstructorDefaultValuesReferencingThis.ts]
// doc 3.1
// 'this' cannot be referenced in constructor arguments

struct C {
    constructor(x = this) { } // error
}

/* struct D<T> {
    constructor(x = this) { } // error
}

struct E<T> {
    constructor(public x = this) { } // error
}*/

//// [structConstructorDefaultValuesReferencingThis.js]
// doc 3.1
// 'this' cannot be referenced in constructor arguments
var C = (function () {
    function C(x) {
        if (x === void 0) { x = this; }
    } // error
    return C;
})();

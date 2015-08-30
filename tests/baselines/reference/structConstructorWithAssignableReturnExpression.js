//// [structConstructorWithAssignableReturnExpression.ts]
// doc 3
// A struct constructor canot return an expression.

struct C {
    constructor() {
        return 1;  // error
    }
}

struct D {
    x: number;
    constructor() {
        return 1; // error
    }
}

struct E {
    x: number;
    constructor() {
        return { x: 1 }; // error
    }
}

/* struct F<T> {
    x: T;
    constructor() {
        return { x: 1 }; // error
    }
}

struct G<T> {
    x: T;
    constructor() {
        return { x: <T>null }; // error
    }
} */

//// [structConstructorWithAssignableReturnExpression.js]
// doc 3
// A struct constructor canot return an expression.
var C = (function () {
    function C() {
        return 1; // error
    }
    return C;
})();
var D = (function () {
    function D() {
        return 1; // error
    }
    return D;
})();
var E = (function () {
    function E() {
        return { x: 1 }; // error
    }
    return E;
})();

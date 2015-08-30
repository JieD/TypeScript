//// [structWithTwoConstructorDefinitions.ts]
// doc 3
// Multiple constructor implementations are not allowed

struct C {
    constructor() { } // error
    constructor(x) { } // error
}

/* struct D<T> {
    constructor(x: T) { } // error
    constructor(x: T, y: T) { } // error
} */

//// [structWithTwoConstructorDefinitions.js]
// doc 3
// Multiple constructor implementations are not allowed
var C = (function () {
    function C() {
    } // error
    return C;
})();

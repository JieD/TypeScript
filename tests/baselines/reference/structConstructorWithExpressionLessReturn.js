//// [structConstructorWithExpressionLessReturn.ts]
// doc 3
// just return keyword is ok.
// no error

struct C {
    constructor() {
        return;
    }
}

struct D {
    x: number;
    constructor() {
        return;
    }
}

struct E {
    constructor(public x: number) {
        return;
    }
}

struct F<T> {
    constructor(public x: T) {
        return;
    }
}

//// [structConstructorWithExpressionLessReturn.js]
// doc 3
// just return keyword is ok.
// no error
var C = (function () {
    function C() {
        return;
    }
    return C;
})();
var D = (function () {
    function D() {
        return;
    }
    return D;
})();
var E = (function () {
    function E(x) {
        this.x = x;
        return;
    }
    return E;
})();
var F = (function () {
    function F(x) {
        this.x = x;
        return;
    }
    return F;
})();

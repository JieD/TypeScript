//// [structConstructorParameterProperties2.ts]
// doc 3.1

struct C {
    y: number;
    constructor(y: number) { } // ok
}

var c: C;
var r = c.y;

struct D {
    y: number;
    constructor(public y: number) { } // error, Duplicate identifier 'y'
}

var d: D;
var r2 = d.y;

struct E {
    y: number;
    constructor(private y: number) { } // error, Duplicate identifier 'y'
}

var e: E;
var r3 = e.y; // error



//// [structConstructorParameterProperties2.js]
// doc 3.1
var C = (function () {
    function C(y) {
    } // ok
    return C;
})();
var c;
var r = c.y;
var D = (function () {
    function D(y) {
        this.y = y;
    } // error, Duplicate identifier 'y'
    return D;
})();
var d;
var r2 = d.y;
var E = (function () {
    function E(y) {
        this.y = y;
    } // error, Duplicate identifier 'y'
    return E;
})();
var e;
var r3 = e.y; // error

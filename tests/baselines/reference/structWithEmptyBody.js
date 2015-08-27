//// [structWithEmptyBody.ts]
struct C {
}

var c: C;
var o: {} = c; // error
c = 1; // error
c = { foo: '' }; // error
c = () => { }; // error
c = new C(); // ok

struct D {
    constructor() {
        return 1; // error
    }
}

var d: D;
var o: {} = d; // error
d = 1; // error
d = { foo: '' }; // error
d = () => { }; // error
d = c; // error, no inheritance

struct E {
	foo: number;
}

var e: E;
e = 1; // error, Type 'number' is not assignable to type 'E'


//// [structWithEmptyBody.js]
var C = (function () {
    function C() {
    }
    return C;
})();
var c;
var o = c; // error
c = 1; // error
c = { foo: '' }; // error
c = function () {
}; // error
c = new C(); // ok
var D = (function () {
    function D() {
        return 1; // error
    }
    return D;
})();
var d;
var o = d; // error
d = 1; // error
d = { foo: '' }; // error
d = function () {
}; // error
d = c; // error, no inheritance
var E = (function () {
    function E() {
    }
    return E;
})();
var e;
e = 1; // error, Type 'number' is not assignable to type 'E'

//// [structInstancePropertyAndFunctionWithSameName.ts]
// doc 4
// Instance property member declarations declare properties in the struct instance type,
// and must specify names that are unique among all instance property member
// and parameter property declarations in the containing struct.

struct C {
    x: number;
    x() { // error
        return 1;
    }
}

struct D {
    x: number;
    x(v) { } // error
}

struct E {
    x: number;
    constructor(private x: string) {}
}

//// [structInstancePropertyAndFunctionWithSameName.js]
// doc 4
// Instance property member declarations declare properties in the struct instance type,
// and must specify names that are unique among all instance property member
// and parameter property declarations in the containing struct.
var C = (function () {
    function C() {
    }
    C.prototype.x = function () {
        return 1;
    };
    return C;
})();
var D = (function () {
    function D() {
    }
    D.prototype.x = function (v) {
    }; // error
    return D;
})();
var E = (function () {
    function E(x) {
        this.x = x;
    }
    return E;
})();

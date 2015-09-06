//// [structStaticPropertyAndFunctionWithSameName.ts]
// doc 4
// Static property member declarations declare properties in the constructor function type,
// and must specify names that are unique among all static property member declarations
// in the containing struct

struct C {
    static f: number;
    static f() {} // error
}

struct D {
	f: number;
    static f: number;
}

//// [structStaticPropertyAndFunctionWithSameName.js]
// doc 4
// Static property member declarations declare properties in the constructor function type,
// and must specify names that are unique among all static property member declarations
// in the containing struct
var C = (function () {
    function C() {
    }
    C.f = function () {
    }; // error
    return C;
})();
var D = (function () {
    function D() {
    }
    return D;
})();

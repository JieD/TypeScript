//// [structAndVariableWithSameName.ts]
struct C { foo: string; } // error
var C = ''; // error

module M {
    struct D { // error
        bar: string;
    }

    var D = 1; // error
}

//// [structAndVariableWithSameName.js]
var C = (function () {
    function C() {
    }
    return C;
})(); // error
var C = ''; // error
var M;
(function (M) {
    var D = (function () {
        function D() {
        }
        return D;
    })();
    var D = 1; // error
})(M || (M = {}));

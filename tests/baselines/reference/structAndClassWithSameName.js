//// [structAndClassWithSameName.ts]
struct C { foo: string; }
class C { foo: string; } // error

module M {
    struct D {
        bar: string;
    }

    class D { // error
        bar: string;
    }
}

//// [structAndClassWithSameName.js]
var C = (function () {
    function C() {
    }
    return C;
})();
var C = (function () {
    function C() {
    }
    return C;
})(); // error
var M;
(function (M) {
    var D = (function () {
        function D() {
        }
        return D;
    })();
    var D = (function () {
        function D() {
        }
        return D;
    })();
})(M || (M = {}));

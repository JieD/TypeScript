//// [structAndInterfaceWithSameName.ts]
struct C { foo: string; }
interface C { foo: string; } // error

module M {
    struct D {
        bar: string;
    }

    interface D { // error
        bar: string;
    }
}

//// [structAndInterfaceWithSameName.js]
var C = (function () {
    function C() {
    }
    return C;
})();
var M;
(function (M) {
    var D = (function () {
        function D() {
        }
        return D;
    })();
})(M || (M = {}));

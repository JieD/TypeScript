//// [structWithConstructors.ts]
// doc 2.5
// If the struct contains a constructor declaration with overloads, a set of construct signatures with
// the parameter lists of the overloads, all having the same type parameters as the struct and returning
// the instance type of the struct.

module NonGeneric {
    struct C {
        constructor(x: string) { }
    }

    var c = new C(); // error
    var c2 = new C(''); // ok

    struct C2 {
        constructor(x: number);
        constructor(x: string);
        constructor(x: any) { }
    }

    var c3 = new C2(); // error
    var c4 = new C2(''); // ok
    var c5 = new C2(1); // ok

    struct D extends C2 { }

    var d = new D(); // error
    var d2 = new D(1); // ok
    var d3 = new D(''); // ok
}

/* module Generics {
    struct C<T> {
        constructor(x: T) { }
    }

    var c = new C(); // error
    var c2 = new C(''); // ok

    struct C2<T,U> {
        constructor(x: T);
        constructor(x: T, y: U);
        constructor(x: any) { }
    }

    var c3 = new C2(); // error
    var c4 = new C2(''); // ok
    var c5 = new C2(1, 2); // ok

    struct D<T, U> extends C2<T, U> { }

    var d = new D(); // error
    var d2 = new D(1); // ok
    var d3 = new D(''); // ok
} */

//// [structWithConstructors.js]
// doc 2.5
// If the struct contains a constructor declaration with overloads, a set of construct signatures with
// the parameter lists of the overloads, all having the same type parameters as the struct and returning
// the instance type of the struct.
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NonGeneric;
(function (NonGeneric) {
    var C = (function () {
        function C(x) {
        }
        return C;
    })();
    var c = new C(); // error
    var c2 = new C(''); // ok
    var C2 = (function () {
        function C2(x) {
        }
        return C2;
    })();
    var c3 = new C2(); // error
    var c4 = new C2(''); // ok
    var c5 = new C2(1); // ok
    var D = (function (_super) {
        __extends(D, _super);
        function D() {
            _super.apply(this, arguments);
        }
        return D;
    })(C2);
    var d = new D(); // error
    var d2 = new D(1); // ok
    var d3 = new D(''); // ok
})(NonGeneric || (NonGeneric = {}));

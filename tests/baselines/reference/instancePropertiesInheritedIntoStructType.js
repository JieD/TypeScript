//// [instancePropertiesInheritedIntoStructType.ts]
// doc 2.4
// All base struct instance type property that are not overridden in the struct
// ok

module NonGeneric {
    struct C {
        x: string;
        fn() { return this; }
        constructor(public a: number, private b: number) { }
    }

    struct D extends C { e: string; }

    var d = new D(1, 2);
    var r = d.fn();
    var r2 = r.x;

}

/* module Generic {
    struct C<T, U> {
        x: T;
        fn() { return this; }
        constructor(public a: T, private b: U) { }
    }

    struct D<T, U> extends C<T, U> { e: T; }

    var d = new D(1, '');
    var r = d.fn();
    var r2 = r.x;
} */

//// [instancePropertiesInheritedIntoStructType.js]
// doc 2.4
// All base struct instance type property that are not overridden in the struct
// ok
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NonGeneric;
(function (NonGeneric) {
    var C = (function () {
        function C(a, b) {
            this.a = a;
            this.b = b;
        }
        C.prototype.fn = function () {
            return this;
        };
        return C;
    })();
    var D = (function (_super) {
        __extends(D, _super);
        function D() {
            _super.apply(this, arguments);
        }
        return D;
    })(C);
    var d = new D(1, 2);
    var r = d.fn();
    var r2 = r.x;
})(NonGeneric || (NonGeneric = {}));

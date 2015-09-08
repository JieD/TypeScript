//// [structConstructorHasPrototypeProperty.ts]
// doc 2.5
// Every struct automatically contains a static property member named ‘prototype’,
// the type of which is the containing struct with type Any substituted for each type parameter.
// ok

module NonGeneric {
    struct C {
        foo: string;
    }

    struct D extends C {
        bar: string;
    }

    var r = C.prototype;
    r.foo; // any
    var r2 = D.prototype;
    r2.bar; // any
}

/* module Generic {
    struct C<T,U> {
        foo: T;
        bar: U;
    }

    struct D<T,U> extends C<T,U> {
        baz: T;
        bing: U;
    }

    var r = C.prototype; // C<any, any>
    var ra = r.foo; // any
    var r2 = D.prototype; // D<any, any>
    var rb = r2.baz; // any
} */

//// [structConstructorHasPrototypeProperty.js]
// doc 2.5
// Every struct automatically contains a static property member named ‘prototype’,
// the type of which is the containing struct with type Any substituted for each type parameter.
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
        var _C = new TypedObject.StructType({
            foo: TypedObject.string
        });
        function _ctor() {
        }
        function C() {
            var obj = new _C();
            _ctor.call(obj);
            return obj;
        }
        return C;
    })();
    var D = (function () {
        var _D = new TypedObject.StructType({
            bar: TypedObject.string
        });
        function _ctor() {
        }
        function D() {
            var obj = new _D();
            _ctor.call(obj);
            return obj;
        }
        return D;
    })();
    var r = C.prototype;
    r.foo; // any
    var r2 = D.prototype;
    r2.bar; // any
})(NonGeneric || (NonGeneric = {}));

//// [instancePropertyInStructType_basic.ts]
// ok

module NonGeneric {
    struct C {
        x: string;
        /* get y() {
            return 1;
        }
        set y(v) { } */
        fn() { return this; }
        constructor(public a: number, private b: number) { }
    }

    var c = new C(1, 2);
    var r = c.fn();
    var r2 = r.x;
    // var r3 = r.y;
    // r.y = 4;
    // var r6 = c.y(); // error, should be c.y

}

module Generic {
    struct C<T,U> {
        x: T;
        /* get y() {
            return null;
        }
        set y(v: U) { } */
        fn() { return this; }
        constructor(public a: T, private b: U) { }
    }

    var c = new C(1, '');
    var r = c.fn();
    var r2 = r.x;
    // var r3 = r.y;
    // r.y = '';
    // var r6 = c.y(); // error
}

//// [instancePropertyInStructType_basic.js]
// ok
var NonGeneric;
(function (NonGeneric) {
    var C = (function () {
        var _C = new TypedObject.StructType({
            x: TypedObject.string,
        });
        function _ctor(a, b) {
            this.a = a;
            this.b = b;
        }
        function C(a, b) {
            var obj = new _C();
            _ctor.call(obj ,a, b);
            return obj;
        }
        C._TO = _C;
        /* get y() {
            return 1;
        }
        set y(v) { } */
        _C.prototype.fn = function () {
            return this;
        };
        return C;
    })();
    var c = new C(1, 2);
    var r = c.fn();
    var r2 = r.x;
})(NonGeneric || (NonGeneric = {}));
var Generic;
(function (Generic) {
    var C = (function () {
        var _C = new TypedObject.StructType({
            x: TypedObject.Object,
        });
        function _ctor(a, b) {
            this.a = a;
            this.b = b;
        }
        function C(a, b) {
            var obj = new _C();
            _ctor.call(obj ,a, b);
            return obj;
        }
        C._TO = _C;
        /* get y() {
            return null;
        }
        set y(v: U) { } */
        _C.prototype.fn = function () {
            return this;
        };
        return C;
    })();
    var c = new C(1, '');
    var r = c.fn();
    var r2 = r.x;
})(Generic || (Generic = {}));

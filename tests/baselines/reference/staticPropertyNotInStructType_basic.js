//// [staticPropertyNotInStructType_basic.ts]

module NonGeneric {
    struct C {
        fn() { return this; }
        /* static get x() { return 1; }
        static set x(v) { } */
        constructor(public a: number, private b: number) { }
        static foo: string; // not reflected in struct type
    }

    module C {
        export var bar = ''; // not reflected in struct type
    }

    var c = new C(1, 2);
    var r = c.fn();
    var r4 = c.foo; // error
    var r5 = c.bar; // error
    //var r6 = c.x; // error

	var cs: typeof C;
	r = cs.fn(); // error
	r4 = cs.foo; // ok
	r5 = cs.bar; // ok
	//r6 = cs.x; // ok
}

module Generic {
    struct C<T, U> {
        fn() { return this; }
        /* static get x() { return 1; }
        static set x(v) { } */
        constructor(public a: T, private b: U) { }
        static foo: T; // not reflected in struct type
    }

    module C {
        export var bar = ''; // not reflected in struct type
    }

    var c = new C(1, '');
    var r = c.fn();
    var r4 = c.foo; // error
    var r5 = c.bar; // error
    //var r6 = c.x; // error
}

//// [staticPropertyNotInStructType_basic.js]
var NonGeneric;
(function (NonGeneric) {
    var C = (function () {
        var _C = new TypedObject.StructType({
        });
        /* static get x() { return 1; }
        static set x(v) { } */
        function _ctor(a, b) {
            this.a = a;
            this.b = b;
        }
        function C(a, b) {
            var obj = new _C();
            _ctor.call(obj ,a, b);
            return obj;
        }
        C.prototype.fn = function () {
            return this;
        };
        return C;
    })();
    var C;
    (function (C) {
        C.bar = ''; // not reflected in struct type
    })(C || (C = {}));
    var c = new C(1, 2);
    var r = c.fn();
    var r4 = c.foo; // error
    var r5 = c.bar; // error
    //var r6 = c.x; // error
    var cs;
    r = cs.fn(); // error
    r4 = cs.foo; // ok
    r5 = cs.bar; // ok
})(NonGeneric || (NonGeneric = {}));
var Generic;
(function (Generic) {
    var C = (function () {
        var _C = new TypedObject.StructType({
        });
        /* static get x() { return 1; }
        static set x(v) { } */
        function _ctor(a, b) {
            this.a = a;
            this.b = b;
        }
        function C(a, b) {
            var obj = new _C();
            _ctor.call(obj ,a, b);
            return obj;
        }
        C.prototype.fn = function () {
            return this;
        };
        return C;
    })();
    var C;
    (function (C) {
        C.bar = ''; // not reflected in struct type
    })(C || (C = {}));
    var c = new C(1, '');
    var r = c.fn();
    var r4 = c.foo; // error
    var r5 = c.bar; // error
})(Generic || (Generic = {}));

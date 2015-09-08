//// [derivedStructSuperCallsWithThisArg.ts]
// doc 3.2
// it is a compile-time error for argument expressions to reference this.

struct Base {
    x: string;
    constructor(a) { }
}

struct Derived extends Base {
    constructor() {
        super(this); // error, not assignable
    }
}

struct Derived2 extends Base {
    constructor(public a: string) {
        super(this); // error, 'this' cannot be referenced in current location
    }
}

struct Derived3 extends Base {
    constructor(public a: string) {
        super(() => this); // error, 'this' cannot be referenced in current location
    }
}

struct Derived4 extends Base {
    constructor(public a: string) {
        super(function () { return this; }); // ok
    }
}

//// [derivedStructSuperCallsWithThisArg.js]
// doc 3.2
// it is a compile-time error for argument expressions to reference this.
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    var _Base = new TypedObject.StructType({
        x: TypedObject.string,
    });
    function _ctor(a) {
    }
    function Base(a) {
        var obj = new _Base();
        _ctor.call(obj ,a);
        return obj;
    }
    return Base;
})();
var Derived = (function () {
    var _Derived = new TypedObject.StructType({
    });
    function _ctor() {
        _super.call(this, this); // error, not assignable
    }
    function Derived() {
        var obj = new _Derived();
        _ctor.call(obj);
        return obj;
    }
    return Derived;
})();
var Derived2 = (function () {
    var _Derived2 = new TypedObject.StructType({
    });
    function _ctor(a) {
        _super.call(this, this); // error, 'this' cannot be referenced in current location
        this.a = a;
    }
    function Derived2(a) {
        var obj = new _Derived2();
        _ctor.call(obj ,a);
        return obj;
    }
    return Derived2;
})();
var Derived3 = (function () {
    var _Derived3 = new TypedObject.StructType({
    });
    function _ctor(a) {
        var _this = this;
        _super.call(this, function () { return _this; }); // error, 'this' cannot be referenced in current location
        this.a = a;
    }
    function Derived3(a) {
        var obj = new _Derived3();
        _ctor.call(obj ,a);
        return obj;
    }
    return Derived3;
})();
var Derived4 = (function () {
    var _Derived4 = new TypedObject.StructType({
    });
    function _ctor(a) {
        _super.call(this, function () {
            return this;
        }); // ok
        this.a = a;
    }
    function Derived4(a) {
        var obj = new _Derived4();
        _ctor.call(obj ,a);
        return obj;
    }
    return Derived4;
})();

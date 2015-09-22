//// [structConstructorWithAssignableReturnExpression_basic.ts]
// a struct constructor may return an expression, it must be assignable to the struct instance type to be valid

struct C {
    constructor() {
        return 1;  // error
    }
}

struct D {
    x: number;
    constructor() {
        return 1; // error
    }
}

struct E {
    x: number;
    constructor() {
        return { x: 1 }; // error
    }
}

struct Base {
	constructor() {
		return new Derived1();  // error
	}
}

struct F<T> {
    x: T;
    constructor() {
        return { x: 1 }; // error
    }
}

struct G<T> {
    x: T;
    constructor() {
        return { x: <T>null }; // error
    }
}

//// [structConstructorWithAssignableReturnExpression_basic.js]
// a struct constructor may return an expression, it must be assignable to the struct instance type to be valid
var C = (function () {
    var _C = new TypedObject.StructType({
    });
    function _ctor() {
        return 1; // error
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    C._TO = _C;
    return C;
})();
var D = (function () {
    var _D = new TypedObject.StructType({
        x: TypedObject.float64,
    });
    function _ctor() {
        return 1; // error
    }
    function D() {
        var obj = new _D();
        _ctor.call(obj);
        return obj;
    }
    D._TO = _D;
    return D;
})();
var E = (function () {
    var _E = new TypedObject.StructType({
        x: TypedObject.float64,
    });
    function _ctor() {
        return { x: 1 }; // error
    }
    function E() {
        var obj = new _E();
        _ctor.call(obj);
        return obj;
    }
    E._TO = _E;
    return E;
})();
var Base = (function () {
    var _Base = new TypedObject.StructType({
    });
    function _ctor() {
        return new Derived1(); // error
    }
    function Base() {
        var obj = new _Base();
        _ctor.call(obj);
        return obj;
    }
    Base._TO = _Base;
    return Base;
})();
var F = (function () {
    var _F = new TypedObject.StructType({
        x: TypedObject.Object,
    });
    function _ctor() {
        return { x: 1 }; // error
    }
    function F() {
        var obj = new _F();
        _ctor.call(obj);
        return obj;
    }
    F._TO = _F;
    return F;
})();
var G = (function () {
    var _G = new TypedObject.StructType({
        x: TypedObject.Object,
    });
    function _ctor() {
        return { x: null }; // error
    }
    function G() {
        var obj = new _G();
        _ctor.call(obj);
        return obj;
    }
    G._TO = _G;
    return G;
})();

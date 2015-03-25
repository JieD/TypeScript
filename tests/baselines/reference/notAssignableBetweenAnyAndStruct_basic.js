//// [notAssignableBetweenAnyAndStruct_basic.ts]
var a: any;

class C {
	foo: string;
}
var ac: C;

struct S {
	foo: string;
}
var as: S;

ac = a; // ok
as = a; // error

a = ac; // ok
a = as; // error


//// [notAssignableBetweenAnyAndStruct_basic.js]
var a;
var C = (function () {
    function C() {
    }
    return C;
})();
var ac;
var S = (function () {
    var _S = new TypedObject.StructType({
        foo: TypedObject.string
    });
    function _ctor() {
    }
    function S() {
        var obj = new _S();
        _ctor.call(obj);
        return obj;
    }
    return S;
})();
var as;
ac = a; // ok
as = a; // error
a = ac; // ok
a = as; // error

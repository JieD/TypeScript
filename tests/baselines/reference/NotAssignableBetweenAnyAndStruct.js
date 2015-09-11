//// [NotAssignableBetweenAnyAndStruct.ts]
// doc 8
// A struct cannot be assigned or cast to any type, and vice versa.

var a: any;

struct S {
	foo: string;
}
var as: S;

as = a; // error
as = <S>a; // error
a = as; // error
a = <any>as; // error


//// [NotAssignableBetweenAnyAndStruct.js]
// doc 8
// A struct cannot be assigned or cast to any type, and vice versa.
var a;
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
as = a; // error
as = a; // error
a = as; // error
a = as; // error

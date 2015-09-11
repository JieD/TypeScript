//// [NotAssignableBetweenObjectAndStruct.ts]
// doc 8
// A struct cannot be assigned to object type, and vice versa.

var o: {};

struct S {
	foo: string;
}
var os: S;

os = o; // error
os = <S>o; // error
o = os; // error
o = <Object>os; // error


//// [NotAssignableBetweenObjectAndStruct.js]
// doc 8
// A struct cannot be assigned to object type, and vice versa.
var o;
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
var os;
os = o; // error
os = o; // error
o = os; // error
o = os; // error

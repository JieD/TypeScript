//// [structArrayInitialization.ts]
// doc 6
// Struct array length is fixed that if programmers try to access array element that is out of bound,
// compiler will complain “array index out of  bound”.
// Struct array only has one member function ‘length’.

struct C { }
var c = new C();

var structArr: C[];
structArr = new C[2];

structArr[0] = c; // ok
structArr[2]; // error, array index out of bound
structArr.length; // ok
structArr.push(c); // error, push is not a member of struct array


//// [structArrayInitialization.js]
// doc 6
// Struct array length is fixed that if programmers try to access array element that is out of bound,
// compiler will complain “array index out of  bound”.
// Struct array only has one member function ‘length’.
var C = (function () {
    var _C = new TypedObject.StructType({
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
var c = new C();
var structArr;
structArr = new // doc 6
// Struct array length is fixed that if programmers try to access array element that is out of bound,
// compiler will complain “array index out of  bound”.
// Struct array only has one member function ‘length’.

(2);
structArr[0] = c; // ok
structArr[2]; // error, array index out of bound
structArr.length; // ok
structArr.push(c); // error, push is not a member of struct array

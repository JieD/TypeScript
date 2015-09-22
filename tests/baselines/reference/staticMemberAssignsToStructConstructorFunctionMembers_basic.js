//// [staticMemberAssignsToStructConstructorFunctionMembers_basic.ts]
struct C {
    static foo() {
        C.foo = () => { }
    }

    static bar(x: number): number {
        C.bar = () => { } // error, Type '() => void' is not assignable to type '(x: number) => number'
        C.bar = (x) => x; // ok
        C.bar = (x: number) => 1; // ok
        return 1;
    }
}

//// [staticMemberAssignsToStructConstructorFunctionMembers_basic.js]
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
    C._TO = _C;
    _C.foo = function () {
        C.foo = function () {
        };
    };
    _C.bar = function (x) {
        C.bar = function () {
        }; // error, Type '() => void' is not assignable to type '(x: number) => number'
        C.bar = function (x) { return x; }; // ok
        C.bar = function (x) { return 1; }; // ok
        return 1;
    };
    return C;
})();

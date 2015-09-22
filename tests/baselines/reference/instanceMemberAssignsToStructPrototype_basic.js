//// [instanceMemberAssignsToStructPrototype_basic.ts]
struct C {
    foo() {
        C.prototype.foo = () => { }
    }

    bar(x: number): number {
        C.prototype.bar = () => { } // error, Type '() => void' is not assignable to type '(x: number) => number'
        C.prototype.bar = (x) => x; // ok
        C.prototype.bar = (x: number) => 1; // ok
        return 1;
    }
}

//// [instanceMemberAssignsToStructPrototype_basic.js]
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
    _C.prototype.foo = function () {
        C.prototype.foo = function () {
        };
    };
    _C.prototype.bar = function (x) {
        C.prototype.bar = function () {
        }; // error, Type '() => void' is not assignable to type '(x: number) => number'
        C.prototype.bar = function (x) { return x; }; // ok
        C.prototype.bar = function (x) { return 1; }; // ok
        return 1;
    };
    return C;
})();

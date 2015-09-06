//// [structThisInInstanceMemberInitializer.ts]
// doc 4.1
// In an initializer expression for an instance member variable, this is of the struct instance type.
// ok

struct C {
    x = this;
}

/* struct D<T> {
    x = this;
    y: T;
}*/

//// [structThisInInstanceMemberInitializer.js]
// doc 4.1
// In an initializer expression for an instance member variable, this is of the struct instance type.
// ok
var C = (function () {
    var _C = new TypedObject.StructType({
        x: TypedObject.Object
    });
    function _ctor() {
        this.x = this;
    }
    function C() {
        var obj = new _C();
        _ctor.call(obj);
        return obj;
    }
    return C;
})();

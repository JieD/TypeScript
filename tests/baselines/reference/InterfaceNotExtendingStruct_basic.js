//// [InterfaceNotExtendingStruct_basic.ts]
struct S {
	bar: string;
}

interface I extends S {
}


//// [InterfaceNotExtendingStruct_basic.js]
var S = (function () {
    var _S = new TypedObject.StructType({
        bar: TypedObject.string
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

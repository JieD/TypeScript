//// [InterfaceNotExtendingStruct.ts]
struct S {
	bar: string;
}

interface I extends S {
}


//// [InterfaceNotExtendingStruct.js]
var S = (function () {
    function S() {
    }
    return S;
})();

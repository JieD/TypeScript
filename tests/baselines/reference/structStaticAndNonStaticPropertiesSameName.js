//// [structStaticAndNonStaticPropertiesSameName.ts]
// doc 4
// the declaration spaces of instance and static property members are separate.
// Thus, it is possible to have instance and static property members with the same name
// ok

struct C {
    x: number;
    static x: number;

    f() { }
    static f() { }
}

//// [structStaticAndNonStaticPropertiesSameName.js]
// doc 4
// the declaration spaces of instance and static property members are separate.
// Thus, it is possible to have instance and static property members with the same name
// ok
var C = (function () {
    function C() {
    }
    C.prototype.f = function () {
    };
    C.f = function () {
    };
    return C;
})();

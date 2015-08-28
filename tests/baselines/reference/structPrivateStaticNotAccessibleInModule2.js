//// [structPrivateStaticNotAccessibleInModule2.ts]
// doc 2.2
// private property members can be accessed only within the struct body that contains their declaration

struct C {
    private foo: string;
    private static bar: string;
}

struct D extends C {
    baz: number;   
}

module D {
    export var y = D.bar; // error
}

//// [structPrivateStaticNotAccessibleInModule2.js]
// doc 2.2
// private property members can be accessed only within the struct body that contains their declaration
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C() {
    }
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    return D;
})(C);
var D;
(function (D) {
    D.y = D.bar; // error
})(D || (D = {}));

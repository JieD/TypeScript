//// [structPrivatePropertyAccessibleWithinStruct.ts]
// doc 2.2
// private property members can be accessed only within the struct body that contains their declaration
// no errors

struct C {
    private x: string;
    private foo() { return this.foo; }

    private static x: string;
    private static foo() { return this.foo; }
    private static bar() { this.foo(); }
}

// added level of function nesting
struct C2 {
    private x: string;
    private foo() { () => this.foo; }

    private static x: string;
    private static foo() { () => this.foo; }
    private static bar() { () => this.foo(); }
}


//// [structPrivatePropertyAccessibleWithinStruct.js]
// doc 2.2
// private property members can be accessed only within the struct body that contains their declaration
// no errors
var C = (function () {
    function C() {
    }
    C.prototype.foo = function () {
        return this.foo;
    };
    C.foo = function () {
        return this.foo;
    };
    C.bar = function () {
        this.foo();
    };
    return C;
})();
// added level of function nesting
var C2 = (function () {
    function C2() {
    }
    C2.prototype.foo = function () {
        var _this = this;
        (function () { return _this.foo; });
    };
    C2.foo = function () {
        var _this = this;
        (function () { return _this.foo; });
    };
    C2.bar = function () {
        var _this = this;
        (function () { return _this.foo(); });
    };
    return C2;
})();

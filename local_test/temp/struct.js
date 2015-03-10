var _Vector = (function () {
    var _Vector = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64,
        z: TypedObject.float64
    });
    return _Vector
})();
function Vector() {
    var _this = new _Vector();
    return _this;
}
function new_vector(_x, _y, _z) {
    var ret = new Vector();
    ret.x = _x;
    ret.y = _y;
    ret.z = _z;
    return ret;
}
function foo() {
    var v = new_vector(1, 2, 3);
    v.y = 100;
    return v;
}
function bar(v) {
    console.log(v.y);
}
function bar_boo(v) {
    bar(v);
    var ret = foo();
    return ret;
}
var C = (function () {
    function C() {
    }
    C.prototype.func = function () {
        //this.print_vec(this.test_func1(this.test_func0()));
        var line = {
            pos0: new_vector(-2.0, 2.5, 0.0),
            pos1: new_vector(0.49, 0.07, 0.07)
        };
        this.print_line(line);
    };
    C.prototype.test_func0 = function () {
        return new_vector(1, 2, 3);
    };
    C.prototype.test_func1 = function (v) {
        v.x += 100;
        return v;
    };
    C.prototype.print_vec = function (v) {
        console.log(v.x);
        console.log(v.y);
        console.log(v.z);
    };
    C.prototype.print_line = function (l) {
        var _this = this;
        var do_print = function (line) {
            _this.print_vec(line.pos0);
            _this.print_vec(line.pos1);
        };
        do_print(l);
    };
    return C;
})();
//bar_boo(foo());
new C().func();

var TestClass = (function () {
    function TestClass(x, y) {
        this.g = "abcd";
    }
    TestClass.prototype.func = function () {
        this.g = "asdf";
    };
    return TestClass;
})();
var _Point2D = (function () {
    var _Point2D = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64,
    });
    _Point2D.prototype.print = function () {
        console.log("Point(" + this.x + ", " + this.y + ")");
    };
    return _Point2D
})();
function Point2D(x, y) {
    var _this = new _Point2D();
    this.x = 4;
    this.y = 5;
    this.x = this.y + 100;
    this.y += 1;
    ++this.x;
    this.x -= this.y;
    this.y = this.x * this.y;
    this.x = x;
    this.y = y;
    var xx = function (adds) {
        this.x = 100;
        this.y = this.x + adds;
        console.log(this.x + this.y);
    };
    xx(this.x);
    return _this;
}
var p0 = new Point2D(3, 4);
p0.print();
p0.x = 100;
p0.y = 1;
p0.print();
var _Misc = (function () {
    var _Misc = new TypedObject.StructType({
        a: TypedObject.uint32,
        b: TypedObject.int32,
        c: TypedObject.int16,
        d: TypedObject.uint16,
        e: TypedObject.int8,
        f: TypedObject.uint8,
        g: TypedObject.string,
        h: TypedObject.Any,
        i: TypedObject.Object
    });
    return _Misc
})();
function Misc() {
    var _this = new _Misc();
    return _this;
}
var p1 = new Misc();
p1.g = "abcd";
p1.i = p0;
console.log(p1.g);

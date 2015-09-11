//// [NotAssignableBetweenClassAndStruct.ts]
// doc 8
// A struct cannot be assigned or cast to class and vice versa, even if their type shapes are similar.

class Point {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y
	}
}
var cp: Point = new Point(1,1);

struct Point2 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y
	}
}
var sp: Point2 = new Point2(2,2);

cp = sp; // error
cp = <Point>sp; // error
sp = cp; // error
sp = <Point2>cp; // error



//// [NotAssignableBetweenClassAndStruct.js]
// doc 8
// A struct cannot be assigned or cast to class and vice versa, even if their type shapes are similar.
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
})();
var cp = new Point(1, 1);
var Point2 = (function () {
    var _Point2 = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64,
    });
    function _ctor(x, y) {
        this.x = x;
        this.y = y;
    }
    function Point2(x, y) {
        var obj = new _Point2();
        _ctor.call(obj ,x, y);
        return obj;
    }
    return Point2;
})();
var sp = new Point2(2, 2);
cp = sp; // error
cp = sp; // error
sp = cp; // error
sp = cp; // error

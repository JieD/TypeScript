//// [notAssignableBetweenInterfaceAndStruct_basic.ts]
interface P {
	x: number;
	y: number;
}
var ip: P;

struct Point2 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y
	}
}
var sp: Point2 = new Point2(2,2);

ip = sp; // error, cannot assign struct to interface
sp = ip; // error, cannot assign interface to struct


//// [notAssignableBetweenInterfaceAndStruct_basic.js]
var ip;
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
    Point2._TO = _Point2;
    return Point2;
})();
var sp = new Point2(2, 2);
ip = sp; // error, cannot assign struct to interface
sp = ip; // error, cannot assign interface to struct

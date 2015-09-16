//// [structInstanceofOperator.ts]
// instanceof operator cannot applied to struct
// all error

struct P {
	x: number;
	constructor(x: number) {
		this.x = x;
	}
}

struct P2 extends P {
	y: number;
	constructor(x: number, y: number) {
		super(x);
		this.y = y;
	}
}

struct P3 extends P2 {
	constructor(x: number, y: number, public z: number) {
		super(x, y);
		this.z = z;
	}
}

var p1: P;
var p2: P2;
var p3: P3;

p1 = new P(1);
p2 = new P2(2,2);
p3 = new P3(3,3,3);

var r1: boolean = p1 instanceof P;
var r2: boolean = p2 instanceof P2;
var r3: boolean = p3 instanceof P3;


//// [structInstanceofOperator.js]
// instanceof operator cannot applied to struct
// all error
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var P = (function () {
    var _P = new TypedObject.StructType({
        x: TypedObject.float64,
    });
    function _ctor(x) {
        this.x = x;
    }
    function P(x) {
        var obj = new _P();
        _ctor.call(obj ,x);
        return obj;
    }
    return P;
})();
var P2 = (function () {
    var _P2 = new TypedObject.StructType({
        y: TypedObject.float64,
    });
    function _ctor(x, y) {
        _super.call(this, x);
        this.y = y;
    }
    function P2(x, y) {
        var obj = new _P2();
        _ctor.call(obj ,x, y);
        return obj;
    }
    return P2;
})();
var P3 = (function () {
    var _P3 = new TypedObject.StructType({
    });
    function _ctor(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
        this.z = z;
    }
    function P3(x, y, z) {
        var obj = new _P3();
        _ctor.call(obj ,x, y, z);
        return obj;
    }
    return P3;
})();
var p1;
var p2;
var p3;
p1 = new P(1);
p2 = new P2(2, 2);
p3 = new P3(3, 3, 3);
var r1 = p1 instanceof P;
var r2 = p2 instanceof P2;
var r3 = p3 instanceof P3;

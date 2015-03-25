//// [castingOnStructs_basic.ts]
struct P1 {
	x: number;
}

struct P3 {
	x: number;
	y: number;
	z: number;
}

var p1: P1;
var p3: P3;

p1 = p3; // error, no inheritance
p1 = <P1>p3; // ?


//// [castingOnStructs_basic.js]
var P1 = (function () {
    var _P1 = new TypedObject.StructType({
        x: TypedObject.float64
    });
    function _ctor() {
    }
    function P1() {
        var obj = new _P1();
        _ctor.call(obj);
        return obj;
    }
    return P1;
})();
var P3 = (function () {
    var _P3 = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64,
        z: TypedObject.float64
    });
    function _ctor() {
    }
    function P3() {
        var obj = new _P3();
        _ctor.call(obj);
        return obj;
    }
    return P3;
})();
var p1;
var p3;
p1 = p3; // error, no inheritance
p1 = p3; // ?

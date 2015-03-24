var Vector = (function () {
    var _Vector = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64,
        z: TypedObject.float64,
    });
    function Vector(x, y, z) {
        function _ctor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        var obj = new _Vector();
        _ctor.bind(obj)(x, y, z);
        return obj;
    }
    Vector.sfunc = function () {
        return Vector.ZERO;
    };
    Vector.ZERO = new Vector(0, 0, 0);
    Vector.ZERO2 = Vector.ZERO;
    return Vector;
})();


var Matrix3 = (function () {
    var _Matrix3 = new TypedObject.StructType({
        m00: TypedObject.float64,
        m01: TypedObject.float64,
        m02: TypedObject.float64,
        m10: TypedObject.float64,
        m11: TypedObject.float64,
        m12: TypedObject.float64,
        m20: TypedObject.float64,
        m21: TypedObject.float64,
        m22: TypedObject.float64
    });
    function Matrix3() {
        function _ctor() {
        }
        var obj = new _Matrix3();
        _ctor.bind(obj)();
        return obj;
    }
    return Matrix3;
})();

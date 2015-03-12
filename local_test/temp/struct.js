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

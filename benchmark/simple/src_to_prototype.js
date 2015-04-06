var Vec3 = (function () {
    var _Vec3 = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64,
        z: TypedObject.float64,
    });
    function Vec3(_x, _y, _z) {
        var obj = new _Vec3();
        obj.x = _x;
        obj.y = _y;
        obj.z = _z;
        return obj;
    }
    _Vec3.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    _Vec3.prototype.divideScalar = function (scalar) {
        if (scalar !== 0) {
            var invScalar = 1 / scalar;
            this.x *= invScalar;
            this.y *= invScalar;
            this.z *= invScalar;
        }
        else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        return this;
    };
    _Vec3.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    _Vec3.prototype.normalize = function () {
        return this.divideScalar(this.length());
    };
    return Vec3;
})();
var Quat = (function () {
    var _Quat = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64,
        z: TypedObject.float64,
        w: TypedObject.float64,
    });
    function _ctor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    }
    function Quat() {
        var obj = new _Quat();
        _ctor.call(obj);
        return obj;
    }
    _Quat.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    };
    _Quat.prototype.normalize = function () {
        var l = this.length();
        if (l === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
        }
        else {
            l = 1 / l;
            this.x = this.x * l;
            this.y = this.y * l;
            this.z = this.z * l;
            this.w = this.w * l;
        }
        return this;
    };
    _Quat.prototype.setFromAxisAngle = function (axis, angle) {
        var halfAngle = angle / 2;
        var s = Math.sin(halfAngle);
        this.x = axis.x * s;
        this.y = axis.y * s;
        this.z = axis.z * s;
        this.w = Math.cos(halfAngle);
        return this;
    };
    return Quat;
})();
var start = new Date().getTime();
for (var i = 0; i < 30000000; ++i) {
    var axis = new Vec3(5, i / 100.0, 7.0 - i % 100);
    axis.normalize();
    var angle = i % 360;
    new Quat().setFromAxisAngle(axis, angle).normalize();
}
var end = new Date().getTime();
var time = end - start;
console.log('Execution time (ms): ' + time);

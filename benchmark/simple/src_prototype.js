var Vec3 = (function () {
    function Vec3(_x, _y, _z) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }
    Vec3.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vec3.prototype.divideScalar = function (scalar) {
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
    Vec3.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    Vec3.prototype.normalize = function () {
        return this.divideScalar(this.length());
    };
    return Vec3;
})();
var Quat = (function () {
    function Quat() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    }
    Quat.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    };
    Quat.prototype.normalize = function () {
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
    Quat.prototype.setFromAxisAngle = function (axis, angle) {
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

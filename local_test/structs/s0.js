var _Point2D = (function () {
    var _Point2D = new TypedObject.StructType({
        x: TypedObject.int32,
        y: TypedObject.int32,
    });
    _Point2D.prototype.distance = function (pt) {
        return Math.sqrt((pt.x - this.x) * (pt.x - this.x) + (pt.y - this.y) * (pt.y - this.y) | 0) | 0;
    };
    return _Point2D
})();
function Point2D() {
    var _this = new _Point2D();
    return _this;
}
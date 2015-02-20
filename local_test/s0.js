var _Point2DX = (function () {
    var _Point2DX = new TypedObject.StructType({
        x: TypedObject.float64,
    });
    return _Point2DX
})();

function Point2DX(xx) {
    var _this = new _Point2DX();
    this.x = xx;
    var xyz = 1;
    return _this;
}


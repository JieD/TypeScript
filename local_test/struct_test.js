var Point2D = function(_x, _y) {
	var _Point2D = (function () {
	    const _Point2D = new TypedObject.StructType({
	        x: TypedObject.float64,
	        y: TypedObject.float64
	    });
	    
	    _Point2D.prototype.print = function () {
	        console.log("Point(" + this.x + ", " + this.y + ")");
	    };
	    return _Point2D
	})();

	var _this = new _Point2D();
	_this.x = _x;
	_this.y = _y;
	return _this;
}

var p0 = new Point2D(3, 4);
p0.print();

////////////////////////////////////////////////////////////////////////

var _Point2D = (function () {
    var _Point2D = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64
    });
    _Point2D.prototype.print = function() {
        console.log("Point(" + this.x + ", " + this.y + ")");
    };
    return _Point2D
})();

var Point2D = function(x, y) {
	var _this = new _Point2D();
	_this.x = x;
	_this.y = y;
	return _this;
}


var p0 = new Point2D(3, 4);
p0.print();
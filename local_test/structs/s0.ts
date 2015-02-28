struct Point2D {
	x : int;
	y : int;

	distance(pt: Point2D) : int {
		return Math.sqrt((pt.x - this.x)*(pt.x - this.x) + (pt.y - this.y)*(pt.y - this.y));
	}
}
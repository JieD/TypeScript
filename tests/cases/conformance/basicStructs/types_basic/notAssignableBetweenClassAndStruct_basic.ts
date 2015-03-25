class Point {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y
	}
}
var cp: Point = new Point(1,1);

struct Point2 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y
	}
}
var sp: Point2 = new Point2(2,2);

cp = sp; // error, cannot assign struct to class
sp = cp; // error, cannot assign class to struct

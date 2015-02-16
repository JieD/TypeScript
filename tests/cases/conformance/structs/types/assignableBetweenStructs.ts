interface P {
	x: number;
	y: number;
}
var ip: P;

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

ip = cp; // ok
ip = sp; // error, cannot assign struct to interface

cp = ip; // ok
sp = ip; // error, cannot assign interface to struct

cp = sp; // error, cannot assign struct to class
sp = cp; // error, cannot assign class to struct
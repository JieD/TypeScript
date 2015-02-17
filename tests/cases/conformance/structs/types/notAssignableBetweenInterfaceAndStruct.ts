interface P {
	x: number;
	y: number;
}
var ip: P;

struct Point2 {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y
	}
}
var sp: Point2 = new Point2(2,2);

ip = sp; // error, cannot assign struct to interface
sp = ip; // error, cannot assign interface to struct

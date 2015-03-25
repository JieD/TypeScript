struct P1 {
	x: number;
}

struct P3 {
	x: number;
	y: number;
	z: number;
}

var p1: P1;
var p3: P3;

p1 = p3; // error, no inheritance
p1 = <P1>p3; // ?

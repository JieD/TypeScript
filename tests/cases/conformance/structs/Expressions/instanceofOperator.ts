struct P {
	x: number;
	constructor(x: number) {
		this.x = x;
	}
}

struct P2 extends P {
	y: number;
	constructor(x: number, y: number) {
		super(x);
		this.y = y;
	}
}

struct P3 extends P2 {
	constructor(x: number, y: number, public z: number) {
		super(x, y);
		this.z = z;
	}
}

var p1: P;
var p2: P2;
var p3: P3;

p1 = new P(1);
p2 = new P2(2,2);
p3 = new P3(3,3,3);

var r1: boolean = p1 instanceof P;
var r2: boolean = p2 instanceof P2;
var r3: boolean = p3 instanceof P3;

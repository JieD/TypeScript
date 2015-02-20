class TestClass {
	g: string = "abcd";

	constructor(x: number, y: number) {
        
    } 

    func() {
    	this.g = "asdf";
    }	
}

struct Point2D {
	x: number;
	y: number;

	constructor(x: number, y: number) {
        this.x = 4;
        this.y = 5;
        this.x = this.y + 100;
        this.y += 1;
        ++this.x;
        this.x -= this.y;
        this.y = this.x * this.y;
        this.x = x;
        this.y = y;

        var xx = function(adds) {
        	this.x = 100;
        	this.y = this.x + adds;
        	console.log(this.x + this.y);
        };

        xx(this.x);
    } 

    print() {
    	console.log("Point(" + this.x + ", " + this.y + ")");
    }
}

var p0: Point2D = new Point2D(3, 4);
p0.print();
p0.x = 100;
p0.y = 1;
p0.print();

struct Misc {
	a: u32;
	b: i32;
	c: i16;
	d: u16;
	e: i8;
	f: u8;
	g: string;
	h: any;
	i: Point2D;
}

var p1: Misc = new Misc();
p1.g = "abcd";
p1.i = p0;
console.log(p1.g);
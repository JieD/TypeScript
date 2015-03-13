struct Vector {
    x: number;
    y: number;
    z: number;

    constructor(x,y,z) {
    	this.x = x;
    	this.y = y;
    	this.z = z;
    }

    static ZERO: Vector  = new Vector(0,0,0);
    static ZERO2: Vector  = Vector.ZERO;
	static sfunc(): Vector {
    	return Vector.ZERO;
    }
}


/*

class Vector_class {
    x: number;
    y: number;
    z: number;

    constructor(x,y,z) {
    	this.x = x;
    	this.y = y;
    	this.z = z;
    }

    static static_method() {
    	return 1;
    }

    static ZERO : string = "asdf";
}

function new_vector(_x: number, _y: number, _z: number) {
    var ret = new Vector();
    ret.x = _x;
    ret.y = _y;
    ret.z = _z;
    return ret;
}

function foo() {
	var v = new_vector(1,2,3);
	v.y = 100;
	return v;
}

function bar(v: Vector) {
	console.log(v.y);
}

function bar_boo(v: Vector): Vector {
	bar(v);
	var ret = foo();
	return ret;
}

interface Line {
    pos0: Vector;
    pos1: Vector;
}

class C {
	func() {
		//this.print_vec(this.test_func1(this.test_func0()));
		var line : Line = {
							pos0: new_vector(-2.0, 2.5, 0.0),
							pos1: new_vector(0.49, 0.07, 0.07) 
						  };
		this.print_line(line);
	}

	private test_func0() {
		return new_vector(1,2,3);
	}

	private test_func1(v: Vector): Vector {
		v.x += 100;
		return v;
	}

	private print_vec(v: Vector) {
		console.log(v.x);
		console.log(v.y);
		console.log(v.z);
	}

	private print_line(l: Line) {
		var do_print = (line: Line) => {
			this.print_vec(line.pos0);
			this.print_vec(line.pos1);
		}
		do_print(l);
	}
}

//bar_boo(foo());

new C().func();
*/
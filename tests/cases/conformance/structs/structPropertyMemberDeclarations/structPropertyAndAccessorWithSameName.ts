// @target: ES5

struct C {
    x: number;
    get x() { // error, Duplicate identifier 'x'.
        return 1;
    }
}

struct D {
    x: number;
    set x(v) { } // error, Duplicate identifier 'x'.
}

struct E {
    private x: number;
    get x() { // error, Duplicate identifier 'x'.
        return 1;
    }
    set x(v) { } // error, Duplicate identifier 'x'.
}

struct F {
private _x: number;
	get x() { // ok
		return 1;
	}
	set x(v) { } // ok
}
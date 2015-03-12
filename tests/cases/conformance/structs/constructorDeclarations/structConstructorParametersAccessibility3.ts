struct Base {
    constructor(protected x: number) { }
}

struct Derived1 extends Base {
    constructor(public x: number) { // overrides member variable inherited from Base
        super(x);
        this.x; // OK
    }
}

struct Derived2 extends Base {
	constructor(public y: number) {
		super(y);
		this.x; // OK
		this.y; // OK
	}
}

var d: Derived;
d.p;  // public, OK
// A parameter initializer is only allowed in a function or constructor implementation

struct C {
    foo: string;
    constructor(x = 1); // error
    constructor() {
    }
}

struct C {
	foo: string;
	constructor();
	constructor(x = 1) { // ok
	}
}

struct D<T> {
    foo: string;
    constructor(x = 1); // error
    constructor() {
    }
}
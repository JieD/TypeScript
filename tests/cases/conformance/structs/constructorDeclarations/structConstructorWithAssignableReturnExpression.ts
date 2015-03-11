// a struct constructor may return an expression, it must be assignable to the struct instance type to be valid

struct C {
    constructor() {
        return 1;  // error
    }
}

struct D {
    x: number;
    constructor() {
        return 1; // error
    }
}

struct E {
    x: number;
    constructor() {
        return { x: 1 }; // error
    }
}

struct Base {
	constructor() {
		return new Derived1();  // ok
	}
}

struct Derived1 extends Base {
	x: number;
	constructor() {
		super();
	}
}

struct Derived2 extends Base {
	x: number;
	constructor()
		super();
		return new Base(); // ok
	}
}

struct F<T> {
    x: T;
    constructor() {
        return { x: 1 }; // error
    }
}

struct G<T> {
    x: T;
    constructor() {
        return { x: <T>null }; // error
    }
}
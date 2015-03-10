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

struct G {
	x: number;
	constructor() {
		return new G { x: 1 }; // error
	}
}

struct <T> {
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
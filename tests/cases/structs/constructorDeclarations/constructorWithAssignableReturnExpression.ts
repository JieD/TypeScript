// a struct constructor may return an expression, it must be assignable to the struct instance type to be valid

struct C {
    constructor() {
        return 1;
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
        return { x: 1 };
    }
}

/* struct F<T> {
    x: T;
    constructor() {
        return { x: 1 }; // error
    }
}

struct G<T> {
    x: T;
    constructor() {
        return { x: <T>null };
    }
}
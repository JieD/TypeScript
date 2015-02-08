struct C {
    foo: string;
    constructor(x = 1); // error
    constructor() {
    }
}

struct D<T> {
    foo: string;
    constructor(x = 1); // error
    constructor() {
    }
}
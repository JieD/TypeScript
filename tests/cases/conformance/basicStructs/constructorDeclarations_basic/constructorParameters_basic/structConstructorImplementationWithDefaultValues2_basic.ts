struct C {
    constructor(x);
    constructor(public x: string = 1) { // error, Type 'number' is not assignable to type 'string'
        var y = x;
    }
}

struct D<T, U> {
    constructor(x: T, y: U);
    constructor(x: T = 1, public y: U = x) { // error, Type 'number' is not assignable to type 'T'.
											//  Type 'T' is not assignable to type 'U'
        var z = x;
    }
}
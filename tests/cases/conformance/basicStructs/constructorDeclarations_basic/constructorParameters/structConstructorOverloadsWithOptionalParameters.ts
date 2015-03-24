// optional parameters can exist in constructor overloads
// no errors

struct C {
    foo: string;
    constructor(x?, y?: any[]); 
    constructor() {
    }
}

struct D<T> {
    foo: string;
    constructor(x?, y?: any[]); 
    constructor() {
    }
}
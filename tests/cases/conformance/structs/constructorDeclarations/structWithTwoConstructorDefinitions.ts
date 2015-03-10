// Multiple constructor implementations are not allowed
struct C {
    constructor() { } // error
    constructor(x) { } // error
}

class D<T> {
    constructor(x: T) { } // error
    constructor(x: T, y: T) { } // error
}
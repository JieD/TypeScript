struct C {
    constructor() {
        super(); // error
    }
}

struct D<T> {
    public constructor(public x: T) {
        super(); // error
    }
}
// 'super' can only be referenced in a derived struct

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
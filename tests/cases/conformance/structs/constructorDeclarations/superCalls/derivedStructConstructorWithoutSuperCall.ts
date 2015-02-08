// derived struct constructors must contain a super call

struct Base {
    x: string;
}

struct Derived extends Base {
    constructor() { // error
    }
}

struct Base2<T> {
    x: T;
}

struct Derived2<T> extends Base2<T> {
    constructor() { // error for no super call (nested scopes don't count)
        var r2 = () => super(); // error for misplaced super call (nested function)
    }
}

struct Derived3<T> extends Base2<T> {
    constructor() { // error
        var r = function () { super() } // error
    }
}

struct Derived4<T> extends Base2<T> {
    constructor() {
        var r = super(); // ok
    }
}
struct C {
    foo() {
        var r = this;
    }

    static bar() {
        var r2 = this;
    }
}

struct D<T> {
    x: T;
    foo() {
        var r = this;
    }

    static bar() {
        var r2 = this;
    }
}
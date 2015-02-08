struct Base {
    private foo: string;
}

struct Derived extends Base {
    x = super.foo; // error
    y() {
        return super.foo; // error
    }
    z: typeof super.foo; // error

    a: this.foo; // error
}
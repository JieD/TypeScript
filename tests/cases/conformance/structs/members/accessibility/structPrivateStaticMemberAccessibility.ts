struct Base {
    private static foo: string;
}

struct Derived extends Base {
    static bar = Base.foo; // error
    bing = () => Base.foo; // error
}
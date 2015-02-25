struct Base {
    private foo: string;
}

struct Derived extends Base {
    x = super.foo;
    // error,  Only public and protected methods of the base class are accessible via the 'super' keyword
    y() {
        return super.foo;
        // error, Identifier expected & Only public and protected methods of the base class
        // are accessible via the 'super' keyword
    }
    z: typeof super.foo;
    // error, Only public and protected methods of the base class are accessible via the 'super' keyword

    a: this.foo;
    // error, Type expected & Property 'foo' is private and only accessible within class 'Base'
}
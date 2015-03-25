struct Base {
    foo() { return 1; }
    static create() {
        return new this();
    }
}

struct Derived extends Base {
    foo() { return 2; }
}
var d = Derived.create(); 

d.foo();  
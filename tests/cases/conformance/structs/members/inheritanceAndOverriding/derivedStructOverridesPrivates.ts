struct Base {
    private x: { foo: string };
}

struct Derived extends Base {
    private x: { foo: string; bar: string; }; // error, Types have separate declarations of a private property 'x'.
}

struct Base2 {
    private static y: { foo: string };
}

struct Derived2 extends Base2 {
    private static y: { foo: string; bar: string; }; // error, Types have separate declarations of a private property 'y'.
}
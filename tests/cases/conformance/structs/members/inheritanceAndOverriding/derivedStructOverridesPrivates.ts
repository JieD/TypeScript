struct Base {
    private x: { foo: string };
}

struct Derived extends Base {
    private x: { foo: string; bar: string; }; // error, Types have separate declarations of a private property 'x'.
	                                          // Cannot override member variables
}

struct Base2 {
    private static y: { foo: string };
}

struct Derived2 extends Base2 {
    private static y: { foo: string; bar: string; }; // error, Types have separate declarations of a private property 'y'.
}

struct Derived3 extends Base2 {
	private static y: { foo: any }; // error,  Types have separate declarations of a private property 'y'.
}
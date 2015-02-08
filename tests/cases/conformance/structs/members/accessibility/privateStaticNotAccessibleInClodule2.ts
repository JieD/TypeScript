// Any attempt to access a private property member outside the struct body that contains its declaration results in a compile-time error.

struct C {
    private foo: string;
    private static bar: string;
}

struct D extends C {
    baz: number;   
}

module D {
    export var y = D.bar; // error
}
// Any attempt to access a private property member outside the struct body that contains its declaration results in a compile-time error.

struct C {
    private foo: string;
    private static bar: string;
}

module C {
    export var y = C.bar; // error
}
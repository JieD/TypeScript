// struct types are immutable, which means derived struct instance member variables cannot override base
// struct instance memeber variables, but derived struct static member variables can override base
// struct static member variables.

struct Base {
    x: string;
}

struct Derived extends Base {
    x: any; // error
}

struct Base2 {
    static y: string;
}

struct Derived2 extends Base2 {
    static y: any; // ok?
}
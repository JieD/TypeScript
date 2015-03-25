struct C {
    static foo() {
        C.foo = () => { }
    }

    static bar(x: number): number {
        C.bar = () => { } // error, Type '() => void' is not assignable to type '(x: number) => number'
        C.bar = (x) => x; // ok
        C.bar = (x: number) => 1; // ok
        return 1;
    }
}
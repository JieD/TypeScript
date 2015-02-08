struct Base {
    constructor(protected p: number) { }
}

struct Derived extends Base {
    constructor(public p: number) {
        super(p);
        this.p; // OK
    }
}

var d: Derived;
d.p;  // public, OK
struct C1 {
    constructor(public x?: number) { }
}
var c1: C1;
c1.x // OK


struct C2 {
    constructor(private p?: number) { }
}
var c2: C2;
c2.p // private, error


struct C3 {
    constructor(protected p?: number) { }
}
var c3: C3;
c3.p // protected, error

struct Derived extends C3 {
    constructor(p: number) {
        super(p);
        this.p; // OK
    }
}

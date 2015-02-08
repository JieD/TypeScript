// @target: ES5
// no errors

struct B {
    protected x: string;
    protected static x: string;
}

struct C extends B {
    protected get y() { return this.x; }
    protected set y(x) { this.y = this.x; }
    protected foo() { return this.x; }
    protected bar() { return this.foo(); }

    protected static get y() { return this.x; }
    protected static set y(x) { this.y = this.x; }
    protected static foo() { return this.x; }
    protected static bar() { this.foo(); }
}

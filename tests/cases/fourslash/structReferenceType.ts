/// <reference path='fourslash.ts'/>

////struct A {
////    foo: number;
////}
////
////struct B {
////    constructor(public a: A) {}  // a is a reference type
////    getFoo() {
////        return a.foo;
////    }
////}
////
////var a = new A();
////a.foo = 1;
////var b = new B(a);
////a.foo = 2;
////var r = b.getFoo();

verify.eval('r', 2);

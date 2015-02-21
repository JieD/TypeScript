/// <reference path='fourslash.ts'/>

////struct S {
////	constructor(public foo: number, public bar: string) {}
////}
////
////var s: S;
////s = new S(1, "2");
////var r1 = s.foo;
////var r2 = s.bar;

verify.eval('r1', 1);
verify.eval('r2', '2');

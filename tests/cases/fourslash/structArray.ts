/// <reference path='fourslash.ts' />

////struct S {}
////var sa/*1*/1 = new S[2];
////
////class C {}
////var ca/*2*/2 = new Array<C>(2);
////
////function bar(a: S[]) {
////    a[2] = new S();
////}
/////*3*/bar(sa); // error, fixed size struct array


goTo.marker('1');
verify.quickInfoIs('StructArray<S>');

goTo.marker('2');
verify.quickInfoIs('C[]');

verify.errorExistsAfterMarker("3");


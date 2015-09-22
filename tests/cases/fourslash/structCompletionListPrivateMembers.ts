/// <reference path="fourslash.ts"/>

////struct Foo {
////    private x;
////}
////
////struct Bar extends Foo {
////    private y;
////    foo() {
////        this./**/
////    }
////}


goTo.marker();
verify.memberListContains("y");
verify.not.memberListContains("x");

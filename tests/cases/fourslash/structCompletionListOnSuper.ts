/// <reference path='fourslash.ts'/>

////struct Base{
////    foo() {
////    }
////    bar(a: number, b: number) {
////    }
////}
////
////struct Derived extends Base {
////    constructor() {
////        super();
////    }
////    bar(f: number) {
////        super./**/
////    }
////}

goTo.marker();
verify.memberListContains('foo');
verify.memberListContains('bar');
verify.memberListCount(2);

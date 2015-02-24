/// <reference path='fourslash.ts'/>

////struct P {
////	x: number;
////	constructor(x: number) {
////		this.x = x;
////	}
////}
////
////struct P2 extends P {
////	y: number;
////	constructor(x: number, y: number) {
////		super(x);
////		this.y = y;
////	}
////}
////
////struct P3 extends P2 {
////	constructor(x: number, y: number, public z: number) {
////		super(x, y);
////		this.z = z;
////	}
////}
////
////struct P4 {
////    constructor(public x: number, public y: number, public z: number) {
////        this.x =x;
////        this.y = y;
////        this.z = z;
////    }
////}
////
////var p1: P;
////var p2: P2;
////var p3: P3;
////var p4: P4;
////
////p1 = new P(1);
////p2 = new P2(2,2);
////p3 = new P3(3,3,3);
////
////var r1: boolean = p1 instanceof P;
////var r2: boolean = p2 instanceof P2;
////var r3: boolean = p3 instanceof P3;
////var r4: boolean = p4 instanceof P4;
////var r5: boolean = p1 instanceof P2;
////var r6: boolean = p2 instanceof P3;
////var r7: boolean = p4 instanceof P1;
////var r8: boolean = p4 instanceof P3;

verify.eval('r1', true);
verify.eval('r2', true);
verify.eval('r3', true);
verify.eval('r4', true);
verify.eval('r5', false);
verify.eval('r6', false);
verify.eval('r7', false);
verify.eval('r8', false);
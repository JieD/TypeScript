/**
 * Inspired by conformance/expressions/arrayLiterals/arrayLiterals.ts
 */

struct C { private p; }
var structArr = [new C(), new C()];
var structArr: C[]; // Should be OK

var structTypeArray = [C, C, C];
var structTypeArray: Array<typeof C>; // Should OK, not be a parse error

//// [structAppearsToHaveMembersOfObject.ts]
struct C { foo: string; }

var c: C;
var r = c.toString(); // call members of JS Object
var r2 = c.hasOwnProperty('');
var o: Object = c; // error, not assignable
var o2: {} = c; // error, not assignable


//// [structAppearsToHaveMembersOfObject.js]
var C = (function () {
    function C() {
    }
    return C;
})();
var c;
var r = c.toString(); // call members of JS Object
var r2 = c.hasOwnProperty('');
var o = c; // error, not assignable
var o2 = c; // error, not assignable

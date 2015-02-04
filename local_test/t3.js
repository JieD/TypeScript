var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
    E[E["c"] = 2] = "c";
})(E || (E = {}));
var a3;
var a6 = 0 /* a */ + 1;
var rc6 = a6 || a3; // enum || number is number
//var s : string = rc6;
var src = 256;
var cast = ((src & 255) << 24 >> 24);
var s = "_str_";
var n = 100;
var mix1 = n + s;
console.log("\nshould print 100_str_");
console.log(mix1); // should print 100_str_
var mix2 = s + n;
console.log("\nshould print _str_100");
console.log(mix2); // should print _str_100
var d = 7;
var arr = [3, 4, 5, 6, d / 2 | 0];
console.log("\nshould print 6");
console.log(arr[d / 2 | 0]); // should print arr[3];
function print_var(v) {
    v = v | 0;
    console.log(v);
}
console.log("\nthe following output should all be 2");
print_var(d / (3)); //should print 2
print_var(((d / 3))); //should print 2
print_var(d / 3); //should print 2
function foo(x) {
    x = x | 0;
    return (x + 1.5 & 255) << 24 >> 24;
}
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
var geni8 = new GenericNumber();
geni8.add = function (x, y) {
    y = (y & 255) << 24 >> 24;
    x = (x & 255) << 24 >> 24;
    return (x + y & 255) << 24 >> 24;
};
var genu8 = new GenericNumber();
genu8.add = function (x, y) {
    y = y & 255;
    x = x & 255;
    return x + y & 255;
};
geni8.add(1.9, 2.9); // it will return 3
genu8.add(255, 1); // it will return 0
var e = 256;
var f = foo(e);
console.log("\nshould print 0");
print_var(f);
console.log("\nshould print 3");
print_var(geni8.add(1.9, 2.9));
console.log("\nshould print 1");
print_var(genu8.add(256, 1));
console.log("\nshould print 0");
print_var(genu8.add(255, 1));

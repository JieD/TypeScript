var v0 = -4;
v0 = 55;
var v3 = 3;
var v4 = 12.34;
var v1 = 4;
v3 = (v4 & 255);
v4 = v1;
function foo(v) {
    v = v & 255;
}
foo((v1 & 255) >>> 0);
var ar = [v3 >>> 0];
ar.push((256 & 255) >>> 0);
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
var geni8 = new GenericNumber();
geni8.add = function (x, y) {
    y = (y & 255) << 24 >> 24;
    x = (x & 255) << 24 >> 24;
    return (((x + y) & 255) << 24 >> 24) | 0;
};
var genu8 = new GenericNumber();
genu8.add = function (x, y) {
    y = y & 255;
    x = x & 255;
    return ((x + y) & 255) >>> 0;
};
var r1 = geni8.add(((1.9 & 255) << 24 >> 24) | 0, ((2.9 & 255) << 24 >> 24) | 0); // it will return 3
var r2 = genu8.add((255) >>> 0, (1) >>> 0); // it will return 0
console.log(r1 | 0);
console.log(r2 >>> 0);

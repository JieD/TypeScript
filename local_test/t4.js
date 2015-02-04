function assertEqual(val0, val1) {
    var eq = val0 == val1;
    console.log(val0 + " = " + val1);
    console.log(eq);
    console.log();
}
function main() {
    var _$0;
    assertEqual((-1) | 0, -1);
    assertEqual((-1) | 0, -1);
    assertEqual((-1) | 0, -1);
    assertEqual((-1 & 255) >>> 0, 255);
    assertEqual((-1 & 65535) >>> 0, 65535);
    assertEqual((-1 >>> 0) >>> 0, 4294967295);
    // integer arithmetic
    var x = 8;
    var y = 6;
    assertEqual(x + y | 0, 14);
    assertEqual(x - y | 0, 2);
    assertEqual(x / y | 0, 1); //
    assertEqual(x * y | 0, 48);
    assertEqual(x % y | 0, 2);
    // if
    x = 5;
    if (x > 3) {
        x = 10;
    }
    assertEqual(x | 0, 10);
    // conditionals
    x = 5;
    if (x > 3 && x < 10 && 1) {
        x = 15;
    }
    x = 5;
    y = 6;
    if (x > 1 || y > 10 || 0) {
        x = 15;
    }
    assertEqual(x | 0, 15);
    // while loop
    x = 0;
    y = 1;
    while (x < 10) {
        x = x + 1 | 0;
        y = y * 2;
    }
    assertEqual(y | 0, 1024);
    // for loop
    y = 1;
    for (var i = 0; i < 10; (_$0 = i, i = i + 1 | 0, _$0)) {
        y = y * 2;
    }
    assertEqual(y | 0, 1024);
}
main();

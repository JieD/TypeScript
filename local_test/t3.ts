enum E { a, b, c }

var a3: number;
var a6: E = E.a + 1;

var rc6 = a6 || a3; // enum || number is number
//var s : string = rc6;
var src : i32 = 256;
var cast : i8 = <i8>src;

var s : string = "_str_";
var n : int = 100;

var mix1 = n + s;
console.log("\nshould print 100_str_");
console.log(mix1); // should print 100_str_

var mix2 = s + n;
console.log("\nshould print _str_100");
console.log(mix2); // should print _str_100

var d : i32 = 7;
var arr : i32[] = [3,4,5,6,d/2];

console.log("\nshould print 6");
console.log(arr[d / 2]); // should print arr[3];

function print_var(v:i32) {
	console.log(v);
}

console.log("\nthe following output should all be 2");
print_var(d / <i32>3); //should print 2
print_var(<i32>(d / 3)); //should print 2
print_var(d / 3); //should print 2

function foo(x : i32) : i8 {
	return x+1.5;
}

class GenericNumber<T> {
    add: (x: T, y: T) => T;
}

var geni8 = new GenericNumber<i8>();
geni8.add = function(x:i8, y:i8):i8 { return x + y; };

var genu8 = new GenericNumber<u8>();
genu8.add = function(x:u8, y:u8):u8 { return x + y; };

geni8.add(1.9, 2.9); // it will return 3
genu8.add(255, 1); // it will return 0

var e : i32 = 256;
var f : i8 = foo(e);
console.log("\nshould print 0");
print_var(f);

console.log("\nshould print 3");
print_var(geni8.add(1.9, 2.9));

console.log("\nshould print 1");
print_var(genu8.add(256, 1));

console.log("\nshould print 0");
print_var(genu8.add(255, 1));
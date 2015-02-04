var a0 : i32 = 1025;
var a1 : i32 = 1;
var at : u8[] = [a0,a1,256.1];
at = [a0/2,4,234.5];
//
var var1 : u8 = 256;
var var2 : i8 = 200;
var var3 : u16 = 600000;
var var4 : i16 = 100000;
var var5 : int = 3.14;
var var6 : uint = var3 * 10000;
var var7 : double = 0.123456789;
var var8 : float = var7;
var var9 : u8[] = [var4,var5,var6];
var var10 : int = 3 / 4;
var var11 : int = 1 + 2;
var var12 : int = var5 + 2;

function fun_opt_arg(x : u8) : int {
	return x;
}

//t0 = 544;

/*
t0 = 655;

var t1 : i8=129;
t1 = 129;
t1 = --t0 * 5.9 + 5;
*/

function fun(x : i32) : u8 {
	x++;
	return x;
}
fun(255.9);

function fun2(x:u8, y:u8):u8 {
	return x + y; 
};

var f = function fun(x : i32) : u8 {x++;return x;}

function identity<T>(arg: T): T {
    return arg;
}

var v1 = identity(256); // it's an issue

//

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };


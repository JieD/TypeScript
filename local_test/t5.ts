
class Base{

}

class Son extends Base {
    
}

var fx : float;
var fy : double = 1.234567890123;
fx = fy;
console.log(fy);
console.log(fx);


function fun(x : u8, y : i8) : u32{
	var z : int = 1.5;
	z++;
	return x+y+z;
}

var ret = fun(256, 2.9);
console.log(ret);


class GenericNumber<T> {
    add: (x: T, y: T) => T;
}

new GenericNumber<i8>().add = function(x:int, y:u8):u8 { return x+y };


var func1 = (x:int) : u8 => { return x * 2; }
var func2 =function(x:int, y:int): u8 { return x+y };
func1(200.4);
func2(255.7, 1.9);
//console.log(z);



/*
var func = function(x,y) { return x+y; }
var val : int = func(1.1, 2.2);
console.log(val);

function foo(x : float) : int{
	return y + 1;
}

var x : double = 1.43;
var y : float = x;
*/

//console.log(y);
//f(y);


/*
function foo(x : float, y? : number) : int{
	return y + 1;
}

interface x {
	p? : number;
}
*/


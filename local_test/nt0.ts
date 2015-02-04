var v0 : int = -4;
v0 = 55;

var v3 : u8 = 3;
var v4 : number = 12.34;
var v1 : int = 4;
v3 = <u8>v4;
v4 = v1;

function foo(v : u8) {

}

foo(<u8>v1);

var ar : u8[] = [v3];
ar.push(<u8>256);


class GenericNumber<T> {
    add: (x: T, y: T) => T;
}

var geni8 = new GenericNumber<i8>();
geni8.add = function(x:i8, y:i8):i8 { return <i8>(x + y); };

var genu8 = new GenericNumber<u8>();
genu8.add = function(x:u8, y:u8):u8 { return <u8>(x + y); };

var r1=geni8.add(<i8>1.9, <i8>2.9); // it will return 3
var r2=genu8.add(<u8>255, <u8>1); // it will return 0
console.log(r1);
console.log(r2);

/*
var v3 : u8;
v0 = v3;
v3 = <u8>(v0);
*/
/*
var v0 : int;
var v1 : number = 1;
var v2 : string = "h";
var v3 : u8;
//v3 = v0;
//v1 = v2;

//v0 = v1;
//v1 = v0;
v3 = v0;
v0 = v3;
*/
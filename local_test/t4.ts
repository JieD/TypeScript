
function assertEqual(val0, val1){
  var eq : boolean = val0 == val1;
  console.log(val0 + " = " + val1);
	console.log(eq);
  console.log();
}

function main() {
  
  assertEqual(<i8>-1, -1);
  assertEqual(<i16>-1, -1);
  assertEqual(<i32>-1, -1);
  assertEqual(<u8>-1, 255);
  assertEqual(<u16>-1, 65535);
  assertEqual(<u32>-1, 4294967295);

  // integer arithmetic
  var x : int = 8;
  var y : int = 6;
  assertEqual(x + y, 14);
  assertEqual(x - y, 2);
  assertEqual(x / y, 1); //
  assertEqual(x * y, 48);
  assertEqual(x % y, 2);

  // if
  x = 5;
  if(x > 3) {
    x = 10;
  }
  assertEqual(x, 10);

  // conditionals
  x = 5;
  if(x > 3 && x < 10 && 1) {
      x = 15;
  }

  x = 5;
  y = 6;
  if(x > 1 || y > 10 || 0) {
    x = 15;
  } 
  assertEqual(x, 15);

  // while loop
  x = 0;
  y = 1;
  while(x < 10) {
    x = x + 1;
    y = y * 2;
  }
  assertEqual(y, 1024);

  // for loop
  y = 1;
  
  for(var i:int=0; i<10; i++) {
    y = y * 2;
  }
  assertEqual(y, 1024);
}

main();

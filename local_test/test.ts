
class TestBase{
    assert(val : boolean){
        if(val){
            console.log("Pass!");
        }else{
            console.log("Fail!");
        }
    }
}

class PrimTypeTestU8 extends TestBase{
	valueU8  : u8;

    constructor(){
        super();
        this.valueU8 = 0;
    }

    test() {
        console.log("Testing u8");
        this.assert(this.valueU8 === 0);
        this.valueU8 = 1;
        this.assert(this.valueU8 === 1);
        this.valueU8 = -1;
        this.assert(this.valueU8 === 0xff);
        this.valueU8 = 0xff;
        this.assert(this.valueU8 === 0xff);
        this.valueU8 += 1;
        this.assert(this.valueU8 === 0);
        console.log("");
    }
}

class PrimTypeTestI8 extends TestBase{
    valueI8  : i8;

    constructor(){
        super();
        this.valueI8 = 0;
    }

    test() {
        console.log("Testing i8");
        this.assert(this.valueI8 === 0);
        this.valueI8 = 1;
        this.assert(this.valueI8 === 1);
        this.valueI8 = -1;
        this.assert(this.valueI8 === -1);
        this.valueI8 = 0xff;
        this.assert(this.valueI8 === -1);
        this.valueI8 += 1;
        this.assert(this.valueI8 === 0);
        console.log("");
    }
}

class PrimTypeTestU16 extends TestBase{
    valueU16  : u16;

    constructor(){
        super();
        this.valueU16 = 0;
    }

    test() {
        console.log("Testing u16");
        this.assert(this.valueU16 === 0);
        this.valueU16 = 1;
        this.assert(this.valueU16 === 1);
        this.valueU16 = -1;
        this.assert(this.valueU16 === 0xffff);
        this.valueU16 = 0xffff;
        this.assert(this.valueU16 === 0xffff);
        this.valueU16 += 1;
        this.assert(this.valueU16 === 0);
        console.log("");
    }
}

class PrimTypeTestI16 extends TestBase{
    valueI16  : i16;

    constructor(){
        super();
        this.valueI16 = 0;
    }

    test() {
        console.log("Testing i16");
        this.assert(this.valueI16 === 0);
        this.valueI16 = 1;
        this.assert(this.valueI16 === 1);
        this.valueI16 = -1;
        this.assert(this.valueI16 === -1);
        this.valueI16 = 0xffff;
        this.assert(this.valueI16 === -1);
        this.valueI16 += 1;
        this.assert(this.valueI16 === 0);
        console.log("");
    }
}


class PrimTypeTestU32 extends TestBase{
    valueU32  : u32;

    constructor(){
        super();
        this.valueU32 = 0;
    }

    test() {
        console.log("Testing u32");
        this.assert(this.valueU32 === 0);
        this.valueU32 = 1;
        this.assert(this.valueU32 === 1);
        this.valueU32 = -1;
        this.assert(this.valueU32 === 0xffffffff);
        this.valueU32 = 0xffffffff;
        this.assert(this.valueU32 === 0xffffffff);
        this.valueU32 += 1;
        this.assert(this.valueU32 === 0);
        console.log("");
    }
}

class PrimTypeTestI32 extends TestBase{
    valueI32  : i32;

    constructor(){
        super();
        this.valueI32 = 0;
    }

    test() {
        console.log("Testing i32");
        this.assert(this.valueI32 === 0);
        this.valueI32 = 1;
        this.assert(this.valueI32 === 1);
        this.valueI32 = -1;
        this.assert(this.valueI32 === -1);
        this.valueI32 = 0xffffffff;
        this.assert(this.valueI32 === -1);
        this.valueI32 += 1;
        this.assert(this.valueI32 === 0);
        console.log("");
    }
}
new PrimTypeTestU8().test();
new PrimTypeTestI8().test();
new PrimTypeTestU16().test();
new PrimTypeTestI16().test();
new PrimTypeTestU32().test();
new PrimTypeTestI32().test();
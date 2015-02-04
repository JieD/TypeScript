var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TestBase = (function () {
    function TestBase() {
    }
    TestBase.prototype.assert = function (val) {
        if (val) {
            console.log("Pass!");
        }
        else {
            console.log("Fail!");
        }
    };
    return TestBase;
})();
var PrimTypeTestU8 = (function (_super) {
    __extends(PrimTypeTestU8, _super);
    function PrimTypeTestU8() {
        _super.call(this);
        this.valueU8 = 0;
    }
    PrimTypeTestU8.prototype.test = function () {
        console.log("Testing u8");
        this.assert(this.valueU8 === 0);
        this.valueU8 = 1;
        this.assert(this.valueU8 === 1);
        this.valueU8 = -1 & 255;
        this.assert(this.valueU8 === 0xff);
        this.valueU8 = 0xff;
        this.assert(this.valueU8 === 0xff);
        this.valueU8 = this.valueU8 + (1) & 255;
        this.assert(this.valueU8 === 0);
        console.log("");
    };
    return PrimTypeTestU8;
})(TestBase);
var PrimTypeTestI8 = (function (_super) {
    __extends(PrimTypeTestI8, _super);
    function PrimTypeTestI8() {
        _super.call(this);
        this.valueI8 = 0;
    }
    PrimTypeTestI8.prototype.test = function () {
        console.log("Testing i8");
        this.assert(this.valueI8 === 0);
        this.valueI8 = 1;
        this.assert(this.valueI8 === 1);
        this.valueI8 = -1;
        this.assert(this.valueI8 === -1);
        this.valueI8 = (0xff & 255) << 24 >> 24;
        this.assert(this.valueI8 === -1);
        this.valueI8 = (this.valueI8 + (1) & 255) << 24 >> 24;
        this.assert(this.valueI8 === 0);
        console.log("");
    };
    return PrimTypeTestI8;
})(TestBase);
var PrimTypeTestU16 = (function (_super) {
    __extends(PrimTypeTestU16, _super);
    function PrimTypeTestU16() {
        _super.call(this);
        this.valueU16 = 0;
    }
    PrimTypeTestU16.prototype.test = function () {
        console.log("Testing u16");
        this.assert(this.valueU16 === 0);
        this.valueU16 = 1;
        this.assert(this.valueU16 === 1);
        this.valueU16 = -1 & 65535;
        this.assert(this.valueU16 === 0xffff);
        this.valueU16 = 0xffff;
        this.assert(this.valueU16 === 0xffff);
        this.valueU16 = this.valueU16 + (1) & 65535;
        this.assert(this.valueU16 === 0);
        console.log("");
    };
    return PrimTypeTestU16;
})(TestBase);
var PrimTypeTestI16 = (function (_super) {
    __extends(PrimTypeTestI16, _super);
    function PrimTypeTestI16() {
        _super.call(this);
        this.valueI16 = 0;
    }
    PrimTypeTestI16.prototype.test = function () {
        console.log("Testing i16");
        this.assert(this.valueI16 === 0);
        this.valueI16 = 1;
        this.assert(this.valueI16 === 1);
        this.valueI16 = -1;
        this.assert(this.valueI16 === -1);
        this.valueI16 = (0xffff & 65535) << 16 >> 16;
        this.assert(this.valueI16 === -1);
        this.valueI16 = (this.valueI16 + (1) & 65535) << 16 >> 16;
        this.assert(this.valueI16 === 0);
        console.log("");
    };
    return PrimTypeTestI16;
})(TestBase);
var PrimTypeTestU32 = (function (_super) {
    __extends(PrimTypeTestU32, _super);
    function PrimTypeTestU32() {
        _super.call(this);
        this.valueU32 = 0;
    }
    PrimTypeTestU32.prototype.test = function () {
        console.log("Testing u32");
        this.assert(this.valueU32 === 0);
        this.valueU32 = 1;
        this.assert(this.valueU32 === 1);
        this.valueU32 = -1 >>> 0;
        this.assert(this.valueU32 === 0xffffffff);
        this.valueU32 = 0xffffffff;
        this.assert(this.valueU32 === 0xffffffff);
        this.valueU32 = this.valueU32 + (1) >>> 0;
        this.assert(this.valueU32 === 0);
        console.log("");
    };
    return PrimTypeTestU32;
})(TestBase);
var PrimTypeTestI32 = (function (_super) {
    __extends(PrimTypeTestI32, _super);
    function PrimTypeTestI32() {
        _super.call(this);
        this.valueI32 = 0;
    }
    PrimTypeTestI32.prototype.test = function () {
        console.log("Testing i32");
        this.assert(this.valueI32 === 0);
        this.valueI32 = 1;
        this.assert(this.valueI32 === 1);
        this.valueI32 = -1;
        this.assert(this.valueI32 === -1);
        this.valueI32 = 0xffffffff | 0;
        this.assert(this.valueI32 === -1);
        this.valueI32 = this.valueI32 + (1) | 0;
        this.assert(this.valueI32 === 0);
        console.log("");
    };
    return PrimTypeTestI32;
})(TestBase);
new PrimTypeTestU8().test();
new PrimTypeTestI8().test();
new PrimTypeTestU16().test();
new PrimTypeTestI16().test();
new PrimTypeTestU32().test();
new PrimTypeTestI32().test();

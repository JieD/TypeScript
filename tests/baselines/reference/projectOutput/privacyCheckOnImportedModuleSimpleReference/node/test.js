var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
exports.mExported = require("mExported");
exports.c1 = new exports.mExported.me.class1;
function f1() {
    return new exports.mExported.me.class1();
}
exports.f1 = f1;
exports.x1 = exports.mExported.me.x;
var class1 = (function (_super) {
    __extends(class1, _super);
    function class1() {
        _super.apply(this, arguments);
    }
    return class1;
})(exports.mExported.me.class1);
exports.class1 = class1;
var c2 = new exports.mExported.me.class1;
function f2() {
    return new exports.mExported.me.class1();
}
var x2 = exports.mExported.me.x;
var class2 = (function (_super) {
    __extends(class2, _super);
    function class2() {
        _super.apply(this, arguments);
    }
    return class2;
})(exports.mExported.me.class1);
var mNonExported = require("mNonExported");
exports.c3 = new mNonExported.mne.class1;
function f3() {
    return new mNonExported.mne.class1();
}
exports.f3 = f3;
exports.x3 = mNonExported.mne.x;
var class3 = (function (_super) {
    __extends(class3, _super);
    function class3() {
        _super.apply(this, arguments);
    }
    return class3;
})(mNonExported.mne.class1);
exports.class3 = class3;
var c4 = new mNonExported.mne.class1;
function f4() {
    return new mNonExported.mne.class1();
}
var x4 = mNonExported.mne.x;
var class4 = (function (_super) {
    __extends(class4, _super);
    function class4() {
        _super.apply(this, arguments);
    }
    return class4;
})(mNonExported.mne.class1);

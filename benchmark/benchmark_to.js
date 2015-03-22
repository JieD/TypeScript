/*
var _Vector = new TypedObject.StructType({
    x: TypedObject.float64,
    y: TypedObject.float64,
    z: TypedObject.float64,
});
function _ctor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
function Vector(x, y, z) {
    var obj = new _Vector();
    _ctor.call(obj, x, y, z);
    return obj;
}
_Vector.prototype.length = function () {
    return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
}
_Vector.prototype.divideScalar = function( scalar ) {
    var invScalar = 1 / scalar;
    this.x *= invScalar;
    this.y *= invScalar;
    this.z *= invScalar;
    return this;
}
_Vector.prototype.normalize = function () {
    return this.divideScalar( this.length() );
}
*/

var Vector = new TypedObject.StructType({
    x: TypedObject.float64,
    y: TypedObject.float64,
    z: TypedObject.float64,
});
Vector.prototype.length = function () {
    return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
}

var start = new Date().getTime();

for(var i = 0; i < 1000000; ++i) {
    var v = new Vector();
    v.length();
}

var end = new Date().getTime();
var time = end - start;
var ret = 'Execution time (ms): ' + time;
var para = document.createElement("p");
var node = document.createTextNode(ret);
para.appendChild(node);
document.body.appendChild(para);



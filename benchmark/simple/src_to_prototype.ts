struct Vec3 {
    x : number;
    y : number;
    z : number;

    constructor(_x : number, _y : number, _z : number) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }

    length() {
        return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
    }

    divideScalar( scalar ) {
        if ( scalar !== 0 ) {
            var invScalar = 1 / scalar;
            this.x *= invScalar;
            this.y *= invScalar;
            this.z *= invScalar;
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        return this;
    }

    dot(v : Vec3) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    normalize() {
        return this.divideScalar( this.length() );
    }
}

struct Quat {
    x : number;
    y : number;
    z : number;
    w : number;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    }

    length() {
        return Math.sqrt( this.x * this.x + this.y * this.y 
            + this.z * this.z + this.w * this.w );
    }

    normalize() {
        var l : number = this.length();
        if ( l === 0 ) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
        } else {
            l = 1 / l;
            this.x = this.x * l;
            this.y = this.y * l;
            this.z = this.z * l;
            this.w = this.w * l;
        }
        return this;
    }

    setFromAxisAngle( axis : Vec3, angle : number) {
        var halfAngle : number = angle / 2;
        var s : number = Math.sin( halfAngle );

        this.x = axis.x * s;
        this.y = axis.y * s;
        this.z = axis.z * s;
        this.w = Math.cos( halfAngle );
        return this;
    }
}

var start = new Date().getTime();

for(var i = 0; i < 30000000; ++i) {
    var axis : Vec3 = new Vec3(5, i / 100.0, 7.0 - i % 100);
    axis.normalize();
    var angle = i % 360;
    new Quat().setFromAxisAngle(axis, angle).normalize();
}

var end = new Date().getTime();
var time = end - start;
console.log('Execution time (ms): ' + time);


class Animal {
    constructor(public name: string) { }
    move(meters: number) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move() {
        console.log("Slithering...");
        console.log(5);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move() {
        console.log("Galloping...");
        console.log(45);
    }
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

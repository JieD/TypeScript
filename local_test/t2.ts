interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: u8;
}

interface Square extends Shape, PenStroke {
    sideLength: int;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 34.6;
square.penWidth = 300;

//

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(x : int, y : int) : int {
        var xDist : int = x - Grid.origin.x;
        var yDist : int = y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: int) { }
}

var grid1 = new Grid(1.1);
var grid2 = new Grid(5.1);

grid1.calculateDistanceFromOrigin(10.5, 10.2);
grid2.calculateDistanceFromOrigin(10.5, 10.2);
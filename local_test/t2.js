var square = {};
square.color = "blue";
square.sideLength = 34.6 | 0;
square.penWidth = 300 & 255;
//
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
        scale = scale | 0;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (x, y) {
        y = y | 0;
        x = x | 0;
        var xDist = x - Grid.origin.x | 0;
        var yDist = y - Grid.origin.y | 0;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale | 0;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
})();
var grid1 = new Grid(1.1); // 1x scale
var grid2 = new Grid(5.1); // 5x scale
grid1.calculateDistanceFromOrigin(10.5, 10.2);
grid2.calculateDistanceFromOrigin(10.5, 10.2);

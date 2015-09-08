//// [structReferenceType.ts]
struct Node {
	elem: number;
	next: Node;
	constructor(elem: number, next: Node) {
		this.elem = elem;
		this.next = next;
	}
}
var endNode = new Node(3, null);
var secondNode = new Node(2, endNode);
var firstNode = new Node(1, secondNode);

//// [structReferenceType.js]
var Node = (function () {
    var _Node = new TypedObject.StructType({
        elem: TypedObject.float64,
        next: TypedObject.Object,
    });
    function _ctor(elem, next) {
        this.elem = elem;
        this.next = next;
    }
    function Node(elem, next) {
        var obj = new _Node();
        _ctor.call(obj ,elem, next);
        return obj;
    }
    return Node;
})();
var endNode = new Node(3, null);
var secondNode = new Node(2, endNode);
var firstNode = new Node(1, secondNode);

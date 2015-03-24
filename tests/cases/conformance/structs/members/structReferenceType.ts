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
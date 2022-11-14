class Node {
	constructor(value, next_node = null) {
		this.value = value;
		this.next_node = next_node;
	}
}

class LinkedList {
	
	constructor() {
		let head = null;
		let current = null;
	}

	add(number) {
		// your code here
		let node = new Node(number)
		if (this.head == null) {
			this.head = node;
			return;
		} else {
			this.current = this.head
			while (this.current.next_node) {
				this.current = this.current.next_node
			}
			this.current.next_node = node;
		}
		
	}

	get(index) {
		// your code here
	}
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// // => 5

// module.exports = LinkedList;


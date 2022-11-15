class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.current = null;
    this.length = 0;
  }

  getLength() {
    return this.length + 1
  }

  add(number) {
    // your code here
    let node = new Node(number);
    if (this.head == null) {
      this.head = node;
      return;
    } else {
      this.current = this.head;
      while (this.current.next_node) {
        this.current = this.current.next_node;
      }
      this.current.next_node = node;
      this.length++;
    }
  }

  get(index) {
    // your code here
    let counter = 0;
    if (index < 0 || index >= this.length) {
      return "Out of bounds";
    } else {
      this.current = this.head;
			let returnValue;
      while (this.current) {
        if (counter === index) {
          returnValue = this.current.value;
        }
        this.current = this.current.next_node;
        counter++;
			}
			return returnValue;
    }
  }

  getLast() {
    if (this.head === null) {
      return "Empty"
    } else if (this.head.next_node === null) {
      return this.head
    } else {
      this.current = this.head
      while (this.current.next_node) {
        this.current = this.current.next_node
      }
      return this.current
    }
  }

  getFirst() { 
    if (this.head === null) {
      return "Empty"
    }
    return this.head
  }

  addFirst(value) {
    this.current = new Node(value)
    if (this.head === null) {
      this.head = this.current
    } else {
      this.tempHead = this.head
      this.head = this.current
      this.head.next_node = this.tempHead
    }
  }

  indexOf(index) {
    let counter = 0;
    if (index < 0 || index >= this.length + 1) {
      return "out of bounds"
    } 
    this.current = this.head
    while (index != counter) {
      this.current = this.current.next_node
      counter++
    }
    return this.current
  }

}


const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.getLength())
console.log(list.indexOf(1))
// console.log(list.get(0));
// console.log(list.getFirst())
// console.log(list.getLast())

// // => 5

// module.exports = LinkedList;

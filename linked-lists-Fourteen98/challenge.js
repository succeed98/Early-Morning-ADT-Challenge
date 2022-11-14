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
      //console.log(this.current.next_node.value);
    }
  }

  get(index) {
    // your code here
    let counter = 0;
    console.log(this.length);
    if (this.head == null) {
      return;
    } else {
      this.current = this.head;

      while (counter != index) {
        this.current = this.current.next_node;
        console.log("counter" + counter);

        // if (counter === index) {
        //   return this.current.value;
        // }

        counter++;
      }

      return this.current.value;
    }
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// // => 5

// module.exports = LinkedList;

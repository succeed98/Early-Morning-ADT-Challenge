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
    this.length = 1;
  }

  get(index) {
    // your code here
    let counter = 1;

    if (index <= 0 || index > this.length) {
      return "Out of bounds";
    } else {
      let current = this.head;

      while (current) {
        if (counter === index) {
          return current.value;
        }
        current = current.next_node;
        counter++;
      }
    }
  }

  // Appends the specified element to the end of this list.
  add(number) {
    // your code here
    let node = new Node(number);
    if (this.head == null) {
      this.head = node;
      return;
    } else {
      let current = this.head;
      while (current.next_node) {
        current = current.next_node;
      }
      current.next_node = node;
      this.length++;
    }
  }

  // Inserts the specified element at the specified position in this list.
  addAt(index, value) {
    if (index <= 0 || index > this.length + 1) {
      return "out of bounds";
    } else if (index === 1) {
      let node = new Node(value);
      let current = this.head;
      this.head = node;
      this.head.next_node = current;
    }
    let current = this.head;
    let counter = 1;
    while (counter != index - 1) {
      current = current.next_node;
      counter++;
    }
    // swapping
    let newNode = new Node(value);
    let currentNextNode = current.next_node;
    current.next_node = newNode;
    current.next_node.next_node = currentNextNode;
    this.length++;
  }

  /* Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection’s iterator.
boolean	addAll(int index, Collection<? extends E> c) */
  addAll(arr) {
    //check if the head is null
    let current = this.head;
    for (let i = 1; i < arr.length; i++) {
      this.add(arr[i]);
    }
    this.length = this.length + arr.length;
  }

  // Inserts all of the elements in the specified collection into this list, starting at the specified position.
  addAllAt(index, arr) {
    let incrementIndex = index;
    for (let i = 0; i <= arr.length; i++){
      this.addAt(incrementIndex, arr[i])
      incrementIndex++;
    }
  }

  // Appends the specified element to the end of this list.
  addLast(value) {
    this.current = this.head
    if (this.head == null) {
      this.head == new Node(value)
    } else {
      while (this.current.next_node) {
        this.current = this.current.next_node
      }
      this.current = new Node(value)
    }
    this.length++;
  }

  addFirst(value) {
    if (this.head == null) {
      let newNode = new Node(value);
      this.head == newNode;
      return;
    }
    let currNode = this.head;
    this.head = new Node(value);
    this.head.next_node = currNode;
  }

  //remove all values in the list
  clear() {
    if (this.head == null) return;
    while (this.head != null) {
      if (this.head.next_node != null) {
        this.length--;
      }
      this.head = this.head.next_node;
    }
  }

  //returns true or false when the list contains the given value
  contains(value) {
    if (this.head == null) return false;

    let current = this.head;

    while (current.next_node) {
      if (current.value == value) {
        return true;
      }

      current = current.next_node;
    }
    return false;
  }

  // retrives the first element of the list
  element() {
    if (this.head == null) {
      return;
    }
    return this.head.value;
  }

  // Returns a shallow copy of this LinkedList.
  clone() {
    let shallowHead = new Node(this.head.value)
    let shallowCurrent = shallowHead
    let current = this.head;
    while (current) {
      shallowCurrent.next_node = new Node(current.value)
      current = current.next_node;
      shallowCurrent = shallowCurrent.next_node
    }
    console.log(shallowHead)
  }

  // Returns an iterator over the elements in this deque in reverse sequential order. The elements will be returned in order from last (tail) to first (head).
  decendingIterator() {
    let reverseHead = this.head
    if (reverseHead === null) return null;

    let reverseCurrent = reverseHead
    let previousNode = null
    let nextNode = null 

    while (reverseCurrent) {
      nextNode = reverseCurrent.next_node
      reverseCurrent.next_node = previousNode
      previousNode = reverseCurrent
      reverseCurrent = nextNode
      nextNode = null;
    }
    reverseHead = previousNode
    return reverseHead
  }

}

const list = new LinkedList();

list.add(3);
list.add(5);
list.add(6);
list.clone()
// 1
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst = item => (this.head = new _Node(item, this.head));

  insertLast = item => {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, null);
    }
  };

  remove = item => {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return;
    }
    previousNode.next = currentNode.next;
  };

  find = item => {
    let currentNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  };
}

// 1
class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class Doubly {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst = item => {
    this.head = new _Node(item, this.head, null);
    if (this.head.next === null) {
      this.tail = this.head;
    }
  };

  insertLast = item => {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.tail;
      currentNode.next = new _Node(item, null, currentNode);
      this.tail = currentNode.next;
    }
  };

  insertBefore = (item, key) => {
    if (this.head === null) return null;
    if (this.head.value === key) this.insertFirst(item);
    if (this.tail.value === key) this.insertLast(item);

    let prev = this.head;
    let current = this.head;

    while (current.next) {
      if (current.next.value === key) {
        prev.next = new _Node(item, current.next, prev);
        return;
      }
      prev = current;
      current = current.next;
    }
    return null;
  };

  insertAfter = (item, key) => {
    if (this.head === null) return null;

    let current = this.head;

    while (current.next) {
      if (current.value === key) {
        current.next = new _Node(item, current.next, current);
        return;
      }
      current = current.next;
    }
    return null;
  };

  insertAt = (item, index) => {
    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    let counter = 0;
    let current = this.head;

    while (counter < index - 1) {
      if (current === null) return null;
      current = current.next;
      ++counter;
    }

    current.next = new _Node(item, current.next, current);
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

module.exports = Doubly;

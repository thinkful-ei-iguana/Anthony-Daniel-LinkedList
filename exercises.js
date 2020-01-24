const LinkedList = require('./LinkedList');

const display = LinkedList => {
  let node = LinkedList.head;
  let result = [];
  while (node !== null) {
    result.push(node.value);
    node = node.next;
  }
  console.log(result.join(' > '));
};

const size = LinkedList => {
  let counter = 1;
  let current = LinkedList.head;

  if (current === null) {
    return 0;
  }

  while (current.next !== null) {
    current = current.next;
    counter++;
  }
  return counter;
};

const isEmpty = LinkedList => !!LinkedList.head;

const findPrevious = (LinkedList, idx) => {
  let current = LinkedList.head;

  while (current.next !== null) {
    if (current.next.value === idx) {
      return current.value;
    }
    current = current.next;
  }
  return null;
};

const findLast = LinkedList => {
  let current = LinkedList.head;

  while (current !== null) {
    if (current.next === null) {
      return current.value;
    }
    current = current.next;
  }
  return null;
};

function reverse(list, curr, prev = null) {
  if (curr.next === null) {
    list.head = curr;
  } else reverse(list, curr.next, curr);
  curr.next = prev;
}

const third = LinkedList => {
  let current = LinkedList.head;

  if (current === null || current.next.next === null) {
    return null;
  }

  while (current !== null) {
    if (current.next.next.next === null) {
      return current.value;
    }
    current = current.next;
  }
  return null;
};

const middle = LinkedList => {
  let slow = LinkedList.head;
  let fast = LinkedList.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
};

const main = () => {
  const list1 = new LinkedList();

  list1.insertLast('Apollo');
  list1.insertLast('Boomer');
  list1.insertLast('Helo');
  list1.insertLast('Husker');
  list1.insertLast('Starbuck');
  list1.insertLast('Tauhida');
  list1.remove('squirrel');
  list1.insertBefore('Athena', 'Boomer');
  list1.insertAfter('Hotdog', 'Helo');
  list1.insertAt('Kat', 2);
  list1.remove('Tauhida');

  display(list1);
  console.log(size(list1));
  console.log(isEmpty(list1));
  console.log(findPrevious(list1, 'Boomer'));
  console.log(findLast(list1));
  reverse(list1, list1.head);
  display(list1);
  console.log(third(list1));
  console.log(middle(list1));
};

main();

// 4)
// Removes any nodes with matching values
// O(n^2)

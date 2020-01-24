const LinkedList = require('./LinkedList');

function main() {
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

  let node = list1.head;
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}

main();

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var counter = 0;

  list.addToTail = function(value) {
    var tailNode = new Node(value);
    this[counter++] = tailNode;
    var oldTail = list.tail;
    list.tail = tailNode;
    if (oldTail !== null) {
      oldTail.next = tailNode;
    } else {
      list.head = tailNode;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    } 
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var list1 = new LinkedList;
list1.addToTail(5);
list1.addToTail(4);
console.log(list1);

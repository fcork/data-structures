var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var binaryTreeMethods = {
  insert: function(value) {
    var newNode = BinarySearchTree(value);
    if (this.value === value) {
      return;
    }
    if (this.value > value) {
      if (this.left === null) {
        this.left = newNode;
      } else {
        this.left.insert(newNode.value);
      }
    }
    if (this.value < value) {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.insert(newNode.value);
      }
    }
  },
  contains: function(target) {
    if (this.value === target) {
      return true;
    }
    if (this.value < target) {
      if (this.right !== null) {
        return this.right.contains(target);
      }
    } else {
      if (this.left !== null) {
        return this.left.contains(target);
      }
    }
    return false;
  },
  depthFirstLog: function(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

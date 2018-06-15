var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //this.children = {children: value};
  var child = Tree(value);
  //newTree.children[counter] = value
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target){
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].contains(target)){
        return true;
      };
    }
  }
  return false;
};


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;


  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this[this.counter++] = value;
  },
  pop: function() {
    if (this.counter > 0) {
      this.counter --;
      return this[this.counter];
      delete this[this.counter];
    }
  },
  size: function() {
    return this.counter;
  } 
};

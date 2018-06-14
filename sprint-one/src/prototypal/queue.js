var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.first = 0;


  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.counter++] = value;
  },
  dequeue: function() {
    if (this.first < this.counter){
      var removed = this[this.first];
      delete this[this.counter - this.first];
      this.first++;
      return removed;
    }
  },
  size: function() {
    return this.counter - this.first;
  } 
};


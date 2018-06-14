var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.counter++] = value;
};

Queue.prototype.dequeue = function(){
  if (this.first < this.counter){
    var removed = this[this.first];
    this.first++;
    return removed;
  }
};

Queue.prototype.size = function(){
  return this.counter - this.first;
};



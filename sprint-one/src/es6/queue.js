class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  constructor() {
    this.counter = 0;
    this.first = 0;
  }

  enqueue(value) {
    this[this.counter++] = value;
  }

  dequeue() {
    if (this.first < this.counter) {
      var removed = this[this.first];
      this.first++;
      return removed;
    }
  }

  size() {
    return this.counter - this.first;
  }
}



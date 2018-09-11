class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.counter++] = value;
  }

  pop() {
    if (this.counter > 0) {
      var removed = this.storage[--this.counter];
      delete this.storage[this.counter];
      return removed;
    }
  }
  size() {
    return this.counter;
  }

}
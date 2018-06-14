class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
  }

  push(value) {
    this[this.counter++] = value;
  }

  pop() {
    if (this.counter > 0) {
      this.counter --;
      var removed = this[this.counter];
      delete this[this.counter];
      return removed;
    }
  }
  size() {
    return this.counter;
  }

}
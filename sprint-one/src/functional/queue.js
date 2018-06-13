var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[0] = value;
    counter ++
  };

  someInstance.dequeue = function() {
    if (counter > 0){
      counter --;
      console.log(storage[counter])
      var dequeuer = storage[counter];
      delete storage[counter];
      return dequeuer;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

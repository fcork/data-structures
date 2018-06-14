var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var first = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter++] = value;
    
  };

  someInstance.dequeue = function() {
    if (first < counter){
      var removed =  storage[first];
      delete storage[first];
      first++;
      return removed;
    }
  };

  someInstance.size = function() {
    return counter-first;
  };

  return someInstance;
};


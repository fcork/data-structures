var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.first = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
	enqueue: function(value){
  		this.storage[this.counter++] = value;
  	},
  	dequeue: function(){
  		if (this.first < this.counter){
  		  var removed = this.storage[this.first];
  		  delete this.storage[this.first];
  		  this.first ++;
  		  return removed;
  	    }
  	},
  	size: function(){
  		return this.counter - this.first;
  	} 
};





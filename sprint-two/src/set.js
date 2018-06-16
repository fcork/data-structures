var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  var counter = {} // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item
  }
};

setPrototype.contains = function(item) {
  for (var key in this._storage){
  	if (this._storage[key] === item){
      return true;
  	}
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var key in this._storage){
    if (this._storage[key] === item){
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

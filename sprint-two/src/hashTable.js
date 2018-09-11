

var HashTable = function() {
  this._limit = 8;
  this.size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //var bucket = this._storage.get(index) || []
  // this._storage.set(index, bucket)
  var bucket = this._storage.get(index) || [];
  
  //for loop better because you can break out anytime you want
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    }
  } 
  bucket.push([k, v]);
  this._storage.set(index, bucket);


  //this.storage.set()
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket.splice(i, 1);
        this.size--;
        if (this.size < this.limit * 0.25) {
          this.resize(0.5 * this.limit);
        }
        return tuple[1];
      }
    }
  }
};


// HashTable.prototype.resize = function(newLimit){
//   var oldStorage = this.storage
//   this._limit = newLimit;
//   this.size = 0;
//   this._storage = LimitedArray(newLimit);
//   // var that = this;  Instead of binds, that.insert...
//   oldStorage.each(function(bucket){
//     if (bucket) {
//       bucket.forEach(function(tuple){
//         this.insert(tuple[0], tuple[1])
//       }).bind(this)
//     }
//   }).bind(this)
// }


/*
 * Complexity: What is the time complexity of the above functions?
 */



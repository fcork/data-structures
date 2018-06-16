

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
    if (!bucket){
      this._storage.set(index,[k, v]);
    } else {
      _.each(bucket, function(hash, i){
      	if (hash[i] === k){
      		hash[i+1] === v;
      	} else {
      		bucket.push([k, v]);
      	}
      })
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket){
  	return undefined;
  }
  for (var i = 0; i < bucket.length; i++){
  	var item = bucket[i];
  	if (item[0] === k){
  		return item[1];
  	} 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
  	return undefined;
  } else {
  	if (bucket.length > 2){
      for (var i = 0; i < bucket.length; i++){
      	var item = item[i];
      	if(item === k){
      		bucket.splice(i, 2);
      	}
      }
  	}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



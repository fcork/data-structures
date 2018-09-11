

// Instantiate a new graph
var Graph = function() {

  this.storage = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.storage[node]) {
    this.storage[node] = {};
    this.storage[node].edge = {};
    this.storage[node].value = node;
  }
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    if (this.storage[node]['value'] === node) {
      return true;
    } 
  } 
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if (this.storage[node].edge !== {}){
  // 	var nodeEdge = this.storage[node].edge;
  // 	  if (this.storage[node].edge.prototype.contains(nodeEdge)){
  //       this.storage[node].edge = {};
  //	  }
  // if (this.storage[node].edge[nodeEdge] === node.value){
  //   delete this.storage[node].edge
  // }
  if (this.storage[node].edge !== {}) {
    var nodeEdge = this.storage[node].edge;
    for (var i in nodeEdge) {
      var edge = nodeEdge[i];
      for (var k in this.storage) {
        if (this.storage[edge] !== {}) {
          delete this.storage[k].edge[node];
        }
      }
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].edge[toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //try with object for edges
  this.storage[fromNode].edge[toNode] = toNode;
  this.storage[toNode].edge[fromNode] = fromNode;
  
  

  // fromNode.edge.push(toNode);
  // toNode.edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edge[toNode];
  delete this.storage[toNode].edge[fromNode];
//   _.map(fromNode.edge, function(edge, i){
//   	if (edge[i] === toNode){
//       fromNode.edge.splice(i, 1);
//   	}
//   })
//   _.map(toNode.edge, function(edge, i){
//   	if (edge[i] === fromNode){
//       toNode.edge.splice(i, 1);
//   	}
//   })
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, function(node) {
    return cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



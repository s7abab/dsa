class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    addVertex(vertex) {
      this.vertices.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2) {
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
    }
  
    printGraph() {
      for (const [vertex, neighbors] of this.vertices) {
        console.log(`${vertex} -> ${neighbors.join(', ')}`);
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'A');
  
  graph.printGraph();
  
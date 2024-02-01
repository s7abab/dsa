class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.list[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.list[vertex2]) {
      this.addVertex(vertex2);
    }
    this.list[vertex1].add(vertex2);
    this.list[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.list) {
      console.log(vertex, "->", [...this.list[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    if (this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1)) {
      return true;
    } else {
      return false;
    }
  }

  removeEdge(vertex1, vertex2) {
    this.list[vertex1].delete(vertex2);
    this.list[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.list[vertex]) {
      return;
    }
    for (let adjecentVertex of this.list[vertex]) {
      this.removeEdge(vertex, adjecentVertex);
    }
    delete this.list[vertex];
  }

  // depth first search
  dfs(startVertex) {
    if (!this.list[startVertex]) {
      console.log("Vertex not found in the graph");
      return;
    }

    const stack = [];
    const visited = {};

    stack.push(startVertex);
    visited[startVertex] = true;

    while (stack.length !== 0) {
      const currentVertex = stack.pop();
      console.log(currentVertex);

      for (let neighbor of this.list[currentVertex]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }

  bfs(startVertex) {
    if (!this.list[startVertex]) {
      console.log("Vertex not found in the graph");
      return;
    }

    const queue = [];
    const visited = {};

    queue.push(startVertex);
    visited[startVertex] = true;

    while (queue.length !== 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (let neighbor of this.list[currentVertex]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdges(1, 2);
graph.addEdges(3, 2);
graph.addEdges(4, 3);
graph.addEdges(1, 4);
graph.addEdges(1, 5);
// graph.dfs(2);

graph.bfs(1);

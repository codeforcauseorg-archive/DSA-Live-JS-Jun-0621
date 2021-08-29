class Vertex{
    data;
    neighbours;
    constructor(data){
        this.data = data;
        this.neighbours = [];
    }
}

class Graph{
    #vertices;
    constructor(){
        this.#vertices = new Map();
    }

    addVertex(data){
        if(this.#vertices.has(data) === false){
            let vertex = new Vertex(data);
            this.#vertices.set(data, vertex);
        }
    }

    getVertex(data){
        if(this.#vertices.has(data)){
            return this.#vertices.get(data);
        }
        else{
            return null;
        }
    }

    addEdge(v1, v2){
        let v1Vertex = this.getVertex(v1);
        let v2Vertex = this.getVertex(v2);

        if(v1Vertex && v2Vertex){
            v1Vertex.neighbours.push(v2Vertex);
            v2Vertex.neighbours.push(v1Vertex);
        }
    }

    display(){
        for (const [data, vertex] of this.#vertices) {
            process.stdout.write(data+" -> ");
            let arr = []
            for(const neighbour of vertex.neighbours){
                arr.push(neighbour.data);
            }
            process.stdout.write(arr.join(", "));
            process.stdout.write("\n");
        }
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("D", "E");
graph.addEdge("C", "D");

graph.display();




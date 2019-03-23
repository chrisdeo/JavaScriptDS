function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.resetMarked = resetMarked;
    this.resetMarked();
}

function resetMarked() {
    for (let i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
}

function addEdge(v ,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (let i = 0; i < this.vertices; i++) {
        let str = `${i} -> `;
        for (let j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined)
                str += this.adj[i][j];
        }
        console.log(str); 
    }
}

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log(`Visited vertex: ${v}`);
    }
    this.adj[v].forEach(item => {
        if (!this.marked[item]) {
            this.dfs(item);
        }
    });
}

function bfs(v) {
    this.resetMarked();
    let queue = [];
    this.marked[v] = true;
    queue.unshift(v);
    while (queue.length > 0) {
        let head = queue.shift();
        if (this.adj[head] != undefined) {
            console.log(`Visited vertex: ${head}`);
        }
        this.adj[head].forEach(item => {
            if (!this.marked[item]) {
                this.marked[item] = true;
                queue.push(item);
            }
        })
    }
}
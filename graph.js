function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];       /* 记录广度优先的边，即将所有与该点的邻接点写入 */
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.hasPathTo = hasPathTo;
    this.pathTo = pathTo;
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
                this.edgeTo[item] = head;
                queue.push(item);
            }
        })
    }
}

function pathTo(v, source) {    /* source 为起点 v 为要到的终点*/
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    let path = [];
    for (let i = v; i !== source; i = this.edgeTo[i]) {     /* 路径回溯，直到找到源头 */
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

// g = new Graph(5);
// g.addEdge(0,1);
// g.addEdge(0,2);
// g.addEdge(1,3);
// g.addEdge(2,4);
// g.bfs(0);
// paths = g.pathTo(4, 0);
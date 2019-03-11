function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
}

function simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function showDistro() {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
            console.log(`${i}:  ${this.table[i]}`);
        }
    }
}
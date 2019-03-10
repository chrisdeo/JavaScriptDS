function find(element) {
    let curNode = this.head;
    while (curNode.element !== element) {
        curNode = curNode.next;
    }
    return curNode;
} 

function insert(element, prev) {
    let newNode = new Node(element);
    let prevNode = this.find(prev);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
}

function display() {
    let curNode = this.head;
    while (curNode.next !== null) {
        console.log(curNode.next.element);
        curNode = curNode.next;
    }
}

function findPrev(item) {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.element !== item) {
         curNode = curNode.next;
    }
    return curNode;
}

function remove(item) {
    let prevNode = this.findPrev(item);
    if (prevNode.next !== null)
        prevNode.next = prevNode.next.next;
}

function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node('head');
    this.find = find;
    this.findPrev = findPrev;
    this.display = display;
    this.insert = insert;
    this.remove = remove;
} 


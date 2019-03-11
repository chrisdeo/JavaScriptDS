function find(element) {
    let curNode = this.head;
    while (curNode.element !== element) {
        curNode = curNode.next;
    }
    return curNode;
} 

function findPrev(item) {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.element !== item) {
         curNode = curNode.next;
    }
    return curNode;
}

function findLast() {
    let curNode = this.head;
    while (curNode.next !== null) {
         curNode = curNode.next;
    }
    return curNode;
}

function insert(element, prev) {
    let newNode = new Node(element);
    let prevNode = this.find(prev);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;    /* 指向前面一个找到的 */
    prevNode.next = newNode;
}

function display() {
    let curNode = this.head;
    while (curNode.next !== null) {
        console.log(curNode.next.element);
        curNode = curNode.next;
    }
}

function displayRev() {
    let curNode  = this.head;
    let lastNode = this.findLast();
    while (lastNode.prev !== null) {
        console.log(lastNode.element);
        lastNode = lastNode.prev;
    }
}

function dbRemove(item) {
    let curNode = this.find(item);
    if (curNode.next !== null) {
        curNode.prev.next = curNode.next;
        curNode.next.prev = curNode.prev;
        curNode.next = null;
        curNode.prev = null;
    }
}

function remove(item) {
    let prevNode = this.findPrev(item);
    if (prevNode.next !== null)
        prevNode.next = prevNode.next.next;
}

function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;   /* 双向链表前驱指针  */
}

function LinkedList() {
    this.head = new Node('head');
    this.find = find;
    this.findPrev = findPrev;
    this.display = display;
    this.displayRev = displayRev;
    this.findLast = findLast;
    this.dbRemove = dbRemove;
    this.insert = insert;
    this.remove = remove;
} 


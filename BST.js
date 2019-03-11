function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    console.log(this.data + ' ');
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    let node = new Node(data, null, null)
    if (this.root === null) {
        this.root = node;
    }
    else {
        let cur = this.root, parent;
        while(true) {
            parent = cur;
            if (data < cur.data) {  /* 这个cur只是充当一个游标指针的作用，用以判断该节点是否存在 */
                cur = cur.left;
                if (cur === null) {
                    parent.left = node;
                    break;
                }
            } else {
                cur = cur.right;
                if (cur === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        node.show();
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node !== null) {
        node.show();
        inOrder(node.left);
        inOrder(node.right);
    }  
}

function revOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        inOrder(node.right);
        node.show();
    }  
}
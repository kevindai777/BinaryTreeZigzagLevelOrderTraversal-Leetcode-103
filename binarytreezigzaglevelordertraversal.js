//Objective is to do a zigzag traversal of a binary tree. Every odd level we go 
//right to left and every even level we go left to right.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that does a BFS traversal over the graph.

if (!tree.root) {
    return null
}

let queue = [[tree.root, 0]]
let result = []

while (queue.length > 0) {
    let [node, level] = queue.shift()

    if (!result[level]) {
        result[level] = [node.val]
    } else {
        if (level % 2 == 0) {
            result[level].push(node.val)
        } else {
            result[level].unshift(node.val)
        }
    }

    if (node.left) {
        queue.push([node.left, level + 1])
    }

    if (node.right) {
        queue.push([node.right, level + 1])
    }
}

return result
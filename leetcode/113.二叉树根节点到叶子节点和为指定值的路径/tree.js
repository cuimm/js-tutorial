/*
* 树
* 一棵二叉树要具备：根结点（root）、总节点数（size）、排序方式（compare）
* 每个节点要具备的属性：当前节点内容（element）、当前节点的根（parent）、当前节点的左子树（left）、当前节点的右子树（right）
*
* 遍历树的方式：深度、广度
* 深度：先序遍历、中序遍历、后序遍历
* 广度：层序
* */

class Node {
  constructor(element, parent, left, right) {
    this.element = element; // 当前节点值
    this.parent = parent; // 当前节点父节点
    this.left = left; // 当前节点的左子树
    this.right = right; // 当前节点的右子树
  }
}

class BST {
  constructor(compare) {
    this.root = null; // 根节点
    this.size = 0;  // 总节点数
    this.compare = compare || this.compare; // 排序方式
  }

  /** 二叉搜索树存储的数据必须具有可比较性 */
  compare(a, b) {
    return a - b;
  }

  add(element) {
    if (!this.root) {
      this.root = new Node(element, null);
      this.size++;
      return;
    }
    let parent = null;
    let currentNode = this.root;
    let result = null;
    while (currentNode) {
      result = this.compare(element, currentNode.element);
      parent = currentNode;
      if (result > 0) {
        currentNode = currentNode.right
      } else if (result < 0) {
        currentNode = currentNode.left;
      } else {
        currentNode.element = element;
      }
    }
    const newNode = new Node(element, parent);
    if (result > 0) {
      parent.right = newNode;
    } else if (result < 0) {
      parent.left = newNode;
    }
    this.size++;
  }

  /** 递归模式 */
  insertNode(element, currentNode) {
    if (!this.root) {
      this.root = new Node(element, null);
      this.size++;
      return;
    }
    let _currentNode = currentNode || this.root;
    const result = this.compare(element, _currentNode.element);
    if (result > 0) {
      if (!_currentNode.right) {
        _currentNode.right = new Node(element, _currentNode)
        return;
      }
      this.insertNode(element, _currentNode.right)
    } else if (result < 0) {
      if (!_currentNode.left) {
        _currentNode.left = new Node(element, _currentNode);
      }
      this.insertNode(element, _currentNode.left);
    }
  }

  /* 先序 （中 左 右/中 右 左）*/
  preorderTraversal(visitor) {
    function traversal(node) {
      if (node === null || node === undefined) return;
      visitor.visit(node.element);
      traversal(node.left);
      traversal(node.right);
    }
    traversal(this.root);
  }

  /** 中序 （左 中 右 / 右 中 左）*/
  inorderTraversal(visitor) {
    function traversal(node) {
      if (node === null || node === undefined) return;
      traversal(node.left); // 左
      visitor.visit(node.element); // 中
      traversal(node.right); // 右
    }
    traversal(this.root);
  }

  /** 后序 （左 右 中 / 右 左 中 ）*/
  postorderTraversal(visitor) {
    function traversal(node) {
      if (node === null || node === undefined) return;
      traversal(node.left);
      traversal(node.right);
      visitor.visit(node.element);
    }
    traversal(this.root);
  }
}



/********************* 测试 *************************/

/** 构造一颗搜索二叉树 */
let bst = new BST((a, b) => a.age - b.age);

const ages = [{age: 10}, {age: 8}, {age: 19}, {age: 6}, {age: 7}, {age: 5},{age: 15}, {age: 22}, {age: 20}];
ages.forEach((item) => {
  // bst.add(item);
  bst.insertNode(item)
});
/*
      10
     /  \
    8    19
   /     / \
  6     15  22
 / \        /
5   7      20
*/

function Visitor() {
  this.visit = function (element) {
    console.log(element.age);
    element.age *= 1;
  }
}

const visitor = new Visitor();
// bst.preorderTraversal(visitor); // 前序
// 10 8 6 5 7 19 15 22 20

// bst.inorderTraversal(visitor); // 中序
// 5 6 7 8 10 15 19 20 22

bst.postorderTraversal(visitor); // 后序
// 5 7 6 8 15 20 22 19 10


console.dir(bst.root, {depth: 100});












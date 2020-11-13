/**
 * 树
 * 一棵二叉树要具备：根节点（root）、总节点数（size）、排序方式（compare）
 * 每个节点Node要具备的属性：当前节点内容（element）、当前节点的根（parent）、当前节点的左子树（left）、当前节点的右子树（right）
 *
 * 遍历树的方式：深度、广度
 * 深度：先序、中序、后序
 * 广度：层序
 *
 * 先序：中左右、中右左
 * 中序：左中右、右中左
 * 后序：左右中、右左中
 */
class Node {
  constructor(element, parent, left, right) {
    this.element = element;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(compare) {
    this.root = null; // 根节点
    this.size = 0;  // 总节点数
    this.compare = compare || this.compare;  // 排序方式
  }

  compare(a, b) {
    return a - b;
  }

  /**
   * 添加字节点
   * @param element
   */
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
        currentNode = currentNode.right;
      } else if (result < 0) {
        currentNode = currentNode.left;
      } else {
        currentNode.element = element;
      }
    }
    const newNode = new Node(element, parent);
    if (result > 0) {
      parent.right = newNode;
    } else {
      parent.left = newNode;
    }
    this.size++;
  }

  insertNode(element) {

  }

  /**
   * 前序遍历
   * （中 左 右 / 中 右 左）
   * @param visitor 访问器
   */
  preorderTraversal(visitor) {
    function traversal(node) {
      if (node === null || node === undefined) return;
      visitor(node.element);
      traversal(node.left);
      traversal(node.right);
    }

    traversal(this.root);
  }

  /**
   * 中序 （左 中 右 / 右 中 左）
   * @param visitor 访问器
   */
  inorderTraversal(visitor) {
    function traversal(node) {
      if (node === null || node === undefined) return;
      traversal(node.left);
      visitor(node.element);
      traversal(node.right);
    }

    traversal(this.root);
  }

  /**
   * 后序 （左 右 中 / 右 左 中
   * @param visitor 访问器
   */
  postorderTraversal(visitor) {
    function traversal(node) {
      if (node === null || node === undefined) return;
      traversal(node.left);
      traversal(node.right);
      visitor(node.element);
    }

    traversal(this.root);
  }
}


/********************* 测试 *************************/
/*************** 构造一颗搜索二叉树 ********************/
const ages = [{age: 10}, {age: 8}, {age: 19}, {age: 6}, {age: 7}, {age: 5}, {age: 15}, {age: 22}, {age: 20}];
let bst = new BST((a, b) => {
  return a.age - b.age;
});

ages.forEach(item => {
  bst.add(item)
});

// console.log(bst);

function visitor(element) {
  console.log(element.age);
}

// bst.preorderTraversal(visitor); // 前序 10 8 6 5 7 19 15 22 20

// bst.inorderTraversal(visitor); // 中序 5 6 7 8 10 15 19 20 22

bst.postorderTraversal(visitor); // 后序 5 7 6 8 15 20 22 19 10









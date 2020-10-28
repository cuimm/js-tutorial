/*
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * 返回从根结点到叶子字节点路径总和等于给定目标和的路径
 * @param root 目标树
 * @param sum 指定目标和
 * @returns {Array} 返回值子节点路径
 */
const pathSum = function (root, sum) {
  const result = [];

  function bst(currentNode, total, array) {
    total += currentNode.val;
    array.push(currentNode.val);

    if (currentNode.left || currentNode.right) {
      currentNode.left && bst(currentNode.left, total, array.slice());
      currentNode.right && bst(currentNode.right, total, array.slice());
    } else {
      if (total === sum) {
        result.push(array);
      }
    }
  }

  bst(root, 0, []);

  return result;
}


/******************** test **************************/
const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
      },
      right: {
        val: 2,
      }
    },
  },
  right: {
    val: 8,
    left: {
      val: 13,
    },
    right: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 1,
      }
    }
  },
}

console.log(pathSum(root, 22));

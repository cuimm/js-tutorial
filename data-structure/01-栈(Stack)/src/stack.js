/**
 * 栈
 * 一种受限的线性结构，只能在栈顶添加元素（入栈），也只能在栈顶删除元素（出栈）
 * 一种先进后出（LIFO：Last In First Out）的线性结构，即最后进入的元素最先被弹出栈结构
 */
class Stack {
  constructor() {
    this.items = [];
  }

  // 入栈（添加一个元素到栈顶）
  push(item) {
    this.items.push(item);
  }

  // 出栈（移除并返回栈顶元素）
  pop() {
    return this.items.pop();
  }

  // 查看栈顶元素（返回栈顶元素，但不对栈进行任何操作）
  peek() {
    return this.items[this.items.length - 1];
  }

  // 返回栈中元素个数
  size() {
    return this.items.length;
  }

  // 空栈（返回栈中是否包含元素）
  isEmpty() {
    return this.items.length === 0;
  }

  // 将栈结构已字符串形式返回
  toString() {
    return this.items.reduce((pre, next) => {
      return pre ? (pre + ',' + next.toString()) : next.toString();
    }, '');
  }
}

module.exports = Stack;

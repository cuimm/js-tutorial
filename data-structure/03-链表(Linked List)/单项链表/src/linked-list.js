/**
 * 单向链表
 * 用来存储多个元素，每个元素都包含节点本身和下一个节点的引用（指针）
 *
 * 与数组相比，链表中元素不必要分配连续的内存空间（动态内存管理），而数组长度固定（需要扩容）且需分配连续的内存空间
 * 与数组相比，链表在任意位置插入和删除元素性能更高（时间复杂度O(1)），而数组在开头和中间位置插入和删除元素性能较低
 * 与数组相比，链表访问任意位置（或通过下标）元素都需要从头开始，性能很低，而数组可直接通过下标快速访问任意元素
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * 向链表尾部追加一个元素
   * @param element
   */
  append(element) {
    const node = new Node(element);
    // 判断是否为空链表
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // 从头开始寻找尾节点
      let current = this.head;
      while (current && current.next) {
        current = current.next;
      }
      // 尾节点的next指向当前
      current.next = node;
    }
    // 将链表长度+1
    this.length++;
  }

  /**
   * 获取链表指定位置的元素
   * @param pos
   */
  get(pos) {
    // 对pos进行越界判断
    if (pos < 0 || pos >= this.length) {
      return null;
    }
    // 从头开始寻找执行位置pos的节点
    let current = this.head;
    let index = 0;
    while (index++ < pos) {
      current = current.next;
    }
    return current.element;
  }

  /**
   * 向链表指定位置插入一个元素
   * @param pos
   * @param element
   */
  insert(pos, element) {
    if (pos < 0 || pos > this.length) {
      return false;
    }
    const node = new Node(element);
    // 判断插入位置是否是第一个节点
    if (pos === 0) {
      // 将当前节点指针指向头
      node.next = this.head;
      this.head = node;
    } else {
      // 从头开始找到插入位置
      let current = this.head;
      let index = 0;
      let prev = null;
      while (index++ < pos) {
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
    }
    this.length++;
    return true;
  }

  /***
   * 返回指定元素在链表中的索引
   * @param element
   * @returns {number} 没找到返回-1
   */
  indexOf(element) {
    // 从头开始找到指定位置的节点
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    // 最后未找到返回-1
    return -1;
  }

  /**
   * 更新指定位置的元素
   * @param pos
   * @param element
   * @returns {boolean}
   */
  update(pos, element) {
    if (pos < 0 || pos >= this.length) {
      return false;
    }
    let current = this.head;
    let index = 0;
    while (index++ < pos) {
      current = current.next;
    }
    current.element = element;
    return true;
  }

  /**
   * 删除指定位置的元素
   * @param pos
   * @returns {*} 返回删除对象
   */
  removeAt(pos) {
    if (pos < 0 || pos >= this.length) {
      return false;
    }
    let target = null;
    // 判断删除的元素是否为第一个节点
    if (pos === 0) {
      // 将头的next指针指向下一个元素
      target = this.head;
      this.head = this.head.next;
    } else {
      // 从头开始查找指定位置pos的节点
      let current = this.head;
      let index = 0;
      let prev = null;
      while (index++ < pos) {
        prev = current;
        current = current.next;
      }
      // 将上一个节点的next指向当前节点的next
      prev.next = current.next;
      target = current;
    }
    this.length--;
    return target;
  }

  /**
   * 删除指定元素
   * @param element
   */
  remove(element) {
    const pos = this.indexOf(element);
    return this.removeAt(pos);
  }

  /**
   * 返回链表中包含的元素个数
   */
  size() {
    return this.length;
  }

  /**
   * 返回链表是否包含元素（是否是空链表）
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 将链表以字符串的形式返回
   */
  toString() {
    let result = '';
    let current = this.head;
    while (current) {
      result += result ? '->' + current.element : current.element;
      current = current.next;
    }
    return result;
  }
}

module.exports = LinkedList;

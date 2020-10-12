/**
 * 1. 用来存储多个元素，每个元素都包含【节点本身、上一个节点的引用（prev）和下一个节点的引用（next）】
 * 2. 与单向链表相比，链表相连的方向是双向的，非常容易找到当前节点的上一个节点和下一个节点
 * 3. 与单向链表相比，链表插入或者删除节点时需要4个引用（单向链表只需要2个）
 * 4. 与单向链表相比，链表元素存储空间更大一些，但却很方便解决单向链表难以找到上一个节点的缺点
 * 5. 对于链表重的某个节点p，它的后继的前驱是它自己；同样，它的前驱的后继也是它自己。【 p->next->prev->p  p->prev->next->p 】
 */
class Node {
  constructor(element) {
    this.element = element; // 节点本身
    this.prev = null; // 上一个节点
    this.next = null; // 下一个节点
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * 向链表尾部追加元素
   * @param element 追加的元素
   */
  append(element) {
    const node = new Node(element);
    // 判断是否是空链表
    if (this.isEmpty()) {
      // 将首尾节点指向当前节点
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  /**
   * 向链表指定位置插入一个元素
   * @param pos 插入的下标
   * @param element 插入的元素
   * @returns {boolean}
   */
  insert(pos, element) {
    if (pos < 0 || pos > this.length) {
      return false;
    }
    const node = new Node(element);
    // 判断是否为空链表
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      if (pos === 0) {
        // 链表头部添加
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else if (pos === this.length) {
        // 链表尾部添加
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        // 中间位置添加
        let current = this.head;
        let index = 0;
        while (index++ < pos) {
          current = current.next;
        }
        // 修改指针（current.prev <=> node <=> current）
        node.next = current;
        node.prev = current.prev;
        current.prev.next = node;
        current.prev = node;
      }
    }
    this.length++;
    return true;
  }

  /**
   * 获取链表指定位置的元素
   * @param pos
   */
  get(pos) {
    // let index = 0;
    // let current = this.head;
    // while (current) {
    //   if (index === pos) {
    //     return index;
    //   }
    //   current = current.next;
    //   index++;
    // }
    // return -1;
  }

  /**
   * 返回指定元素在链表中的索引
   * @param element
   */
  indexOf(element) {
    // 从头开始查找指定位置pos的节点
  }

  /**
   * 更新指定位置的元素
   * @param pos
   * @param element
   */
  update(pos, element) {

  }

  /**
   * 删除指定位置的元素
   * @param pos
   */
  removeAt(pos) {

  }

  /**
   * 删除指定元素
   * @param element
   */
  remove(element) {

  }

  /**
   * 查找指定位置的元素
   * @param pos
   * @returns {*}
   */
  search(pos) {
    // 获取pos位置属于前半段还是后半段
    const mid = this.length / 2;
    let index, current;
    if (pos <= mid) {
      // 从头查找
      index = 0;
      current = this.head;
      while (index++ < pos) {
        current = current.next;
      }
    } else {
      // 从尾查找
      index = this.length - 1;
      current = this.tail;
      while (index-- > pos) {
        current = current.prev;
      }
    }
    return current;
  }

  /**
   * 返回链表中包含的元素个数
   */
  size() {

  }

  /**
   * 返回链表是否包含元素（是否是空链表）
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 将链表结构正向以字符串形式返回
   */
  toForwardString() {

  }

  /**
   * 将链表结构反向遍历以字符串形式返回
   */
  toBackwardString() {

  }
}

module.exports = LinkedList;

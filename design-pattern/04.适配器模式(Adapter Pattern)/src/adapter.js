/**
 * 适配器模式：定义一个包装类，用于包装不兼容接口的对象，从而是原本接口不匹配无法一起工作的两个类能够在一起工作。
 *
 * 目标角色（Target）：大陆的电器插头
 * 源角色（Adaptee）: 港式的电器插头
 * 适配器角色（Adapter）: 把港式的电器插头转成更小大陆的电器插头，来适配大陆插座
 */
/**
 * 目标角色Target
 */
class Target {
  request() {
    console.log('大陆的电器插头');
  }
}

/**
 * 源角色Adaptee
 */
class Adaptee {
  specificRequest() {
    console.log('港式的电器插头');
  }
}

/**
 * 适配器Adapter
 */
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  // 重写request方法：通过适配器，将大陆的电器插头->港式的电器插头
  request() {
    this.adaptee.specificRequest();
  }
}

/* 测试 */
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request();

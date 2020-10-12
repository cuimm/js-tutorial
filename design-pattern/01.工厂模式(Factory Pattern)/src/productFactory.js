/**
 * 单一普通类
 */
class Product {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }

  getName() {
    console.log('run getName', this.name);
  }

  getCount() {
    console.log('run getCount', this.count);
  }
}

/**
 * 工厂模式
 *
 * 将new操作符单独封装起来，不关注内部实现细节。
 * 屏蔽内部创建过程，只提供创建的入口（静态方法）。
 */
class ProductFactory {
  static create(name, count) {
    return new Product(name, count);
  }
}


/** 测试 **/
const product = ProductFactory.create('毛巾', 2);
product.getName();
product.getCount();

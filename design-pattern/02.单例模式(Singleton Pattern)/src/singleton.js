/**
 * 普通类
 */
class SingletonObject {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log('run getName', this.name);
  }
}

/**
 * 使用闭包实现单例
 */
const Singleton = (function () {
  let instance = null;

  return function (name) {
    if (!instance) {
      instance = new SingletonObject(name);
    }
    return instance;
  }
})();


/** 测试 **/
const s1 = new Singleton('cuimm');
const s2 = new Singleton('cuihh');

console.log(s1 === s2); // true
console.log(s1.name, s2.name); // cuimm cuimm

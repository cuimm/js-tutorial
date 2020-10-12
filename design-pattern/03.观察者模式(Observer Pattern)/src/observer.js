/**
 * 被观察者：被观察者需要收集所有观察者信息
 */
class Subject {
  constructor(name, state) {
    this.name = name;
    this.state = state;
    this.observer = [];
  }

  /**
   * 收集观察者
   * @param observer
   */
  attach(observer) {
    this.observer.push(observer);
  }

  /**
   * 被观察者状态变化，通知观察者更新
   * @param state
   */
  setState(state) {
    this.state = state;
    this.observer.forEach(o => o.update(this));
  }
}

/**
 * 观察者
 */
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(subject) {
    console.log(`${subject.name}通知${this.name}天气状态${subject.state}`);
  }
}

/** 测试 **/

// 初始化2个观察者
const observer1 = new Observer('山东电视台');
const observer2 = new Observer('中央电视台');

// 被观察者
const subject = new Subject('气象局', '天气晴');
// 被观察者收集观察者信息
subject.attach(observer1);
subject.attach(observer2);

// 被观察者状态变化 => 通过观察者做出相应变化
subject.setState('阴');

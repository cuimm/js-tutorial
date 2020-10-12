/*
* 发布订阅模式：发布订阅模式属于广义上的观察者模式
*
* 观察者模式中观察者和目标直接进行交互
* 而发布订阅模式中统一由【调度中心】进行处理，订阅者和发布者【互不干扰】
* */
class Event {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(event => event(args));
    }
  }
}

/** 测试 **/
const event = new Event();
// 订阅shopping
event.on('shopping', function (who) {
  console.log(`${who}, 买买买, 衣服`);
});
event.on('shopping', function () {
  console.log('买买买, 化妆品');
});
// 订阅playing
event.on('playing', function () {
  console.log('play~~~');
});
// 发布shopping
event.emit('shopping', 'cuimm');
// 发布playing
event.emit('playing');

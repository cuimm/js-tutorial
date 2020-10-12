const handler = {
  // 拦截对象属性的读取，比如proxy.foo和proxy['foo']。
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  // 拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
  set: function (target, propKey, value, receiver) {
    return Reflect.set()
  },

  // 拦截propKey in proxy的操作，返回一个布尔值（包含原型链上的属性）
  has: function (target, propKey) {
    return Reflect.has(target, propKey);
  },

  // 拦截proxy实例作为函数调用的操作
  apply: function (target, thisBinding, args) {
    return args[0];
  },

  // 拦截proxy实例作为构造函数调用的操作
  construct: function (target, args) {
    return {value: args[1]};
  }
};

const proxy = new Proxy(function (x, y) {
  return x + y;
}, handler);


console.log('(get)', proxy['foo'] === "Hello, foo"); // get true
console.log('(set)', proxy['foo'] = 'foo');  // (set) foo
console.log('(has)', 'foo' in proxy); // (has) true
console.log(proxy(1, 2)); // 1
console.log(new proxy(1, 2)); // {value: 2}
console.log(proxy.prototype === Object.prototype); // true

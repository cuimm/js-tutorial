/**
 * 防抖
 * 触发高频函数N秒内只会执行一次，如果N秒后高频函数再次被触发，则重新计算时间。
 * @param fn
 * @param wait
 */
function debounce(fn, wait) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  }
}


/**
 * 节流
 * 高频函数触发，N秒内只会执行一次，所以节流会稀释函数的执行频率
 * @param fn
 * @param wait
 */
function throttle(fn, wait) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;

    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, wait);
  };
}

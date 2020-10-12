/*
* 计算字符串中不重复字串的最长长度
*
* 用 map 对象维护字符的索引，遇到相同的字符，把左边界移动过去即可
* */

function lengthOfLongestSubstring(targetString) {
  // 左边界
  let left = 0;
  // 用来维护字符索引,遇到相同的字符，将左边界移到该重复字符的下一位
  const map = {};

  return targetString.split('').reduce((max, current, index) => {
    if (map[current] !== undefined) {
      left = map[current] + 1
    }
    map[current] = index;

    return Math.max(max, index - left + 1);
  }, 0);
}

console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('aa'));
console.log(lengthOfLongestSubstring('aabcd'));

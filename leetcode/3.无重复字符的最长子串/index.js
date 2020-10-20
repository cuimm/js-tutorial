/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
  输入: "abcabcbb"
  输出: 3
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
  输入: "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
  输入: "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*
* 计算字符串中不重复字串的最长长度
*
* 用 map 对象维护字符的索引，遇到相同的字符，把左边界移动过去即可
* */
function lengthOfLongestSubstring(targetString) {
  // 不重复字串左边界
  let left = 0;
  // 用来维护字符索引,遇到相同的字符，将左边界移到该重复字符的下一位
  const map = {};
  return targetString.split('').reduce((maxLength, current, index) => {
    if (map[current] !== undefined) {
      left = Math.max(left, map[current] + 1);
    }
    map[current] = index;
    return Math.max(maxLength, index - left + 1);
  }, 0);
}


console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('aa'));
console.log(lengthOfLongestSubstring('aabcd'));
console.log(lengthOfLongestSubstring('abba'));
console.log(lengthOfLongestSubstring('abcaacba'));


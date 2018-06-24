/**
 * Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) {
    return 1;
  }
  var maxLen = 0;
  var map = {};
  var start = -1;
  var arr = s.split('');
  arr.forEach((ar, index) => {
    if (map[ar] > start) {
        start = map[ar];
    }
    map[ar] = index;
    maxLen = Math.max(maxLen, index - start);
  })
  return maxLen;
};
console.log(lengthOfLongestSubstring('abcabcbb'));
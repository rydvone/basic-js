const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let res = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  for (let el of arr1) {
    let a = arr2.indexOf(el);
    if (a != -1) {
      res++;
      arr2.splice(a,1);
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};

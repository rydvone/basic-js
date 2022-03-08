const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  throw new NotImplementedError('Not implemented');
  let arr = [];
  num = '' + num;
  for(let i = 0; i < num.length; i++) {
    let arrTemp = ('' + num).split('');
    arrTemp.splice(i, 1);
    arr.push(arrTemp.join(''));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  throw new NotImplementedError('Not implemented');
  // let reStart = new RegExp(`^[0-9]|^[A-F]`, '');
  // let reEnd = new RegExp(`[0-9]$|[A-F]$`, '');  

  // if (n.length != 17) {
  //   return false;
  // }
  
  // let arr = n.split('-');
  // let countCheckGroup = 0;
  // for (const el of arr) {
  //   if (reStart.test(el) && reEnd.test(el)) {
  //     countCheckGroup++;
  //   }
  // }

  // return (countCheckGroup == 6)
  //   ? true
  //   : false;
}
module.exports = {
  isMAC48Address
};

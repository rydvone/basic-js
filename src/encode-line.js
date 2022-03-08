const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  throw new NotImplementedError('Not implemented');

  let obj = {};
  let s1 = '';
  let res = 1;
  
  //find and group all letter
  for(let i = 0; i < str.length; i++) {
    if(str[i] == str[i-1]) {
      res++;
      obj[str[i]] = res;
    }
    if (str[i] != str[i-1]) {
      res = 1;
      obj[str[i]] = res;
    }
  }
  //new string
  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]] > 1) {
      s1 = s1 + obj[str[i]] + str[i]; 
      i += obj[str[i]] - 1;
    }
    if(obj[str[i]] == 1 ) {
      s1 += str[i];
    }
  }
  return s1;
}

module.exports = {
  encodeLine
};

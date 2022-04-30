const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  throw new NotImplementedError('Not implemented');
  const innerArr = [...arr];  
  
  innerArr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }); 
  for(let i = 0; i < innerArr.length; i++) {
    if(innerArr[i] == -1) {
      innerArr.splice(i, 1);
      i--;
    }
  }

  return arr.map((el) => {
    if(el != -1) {
      return el = innerArr.shift();
    } else {
      return el;
    }
  })
}

module.exports = {
  sortByHeight
};

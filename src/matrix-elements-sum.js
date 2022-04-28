const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let sumElements = 0;
  const arrInner =  [];
  for(const el of matrix) {
    const arrInnerTemp =  [...el];
    arrInner.push(arrInnerTemp);
  }

  for(let i = 0; i < arrInner[0].length; i++) {
    let sumInner = arrInner[0][i];
    for(let j = 1; j < arrInner.length; j++) {
      if(arrInner[j-1][i] !== 0) {    
        sumInner = sumInner + arrInner[j][i];
      }
    }
    sumElements = sumElements + sumInner;
  }
  return sumElements;
}

module.exports = {
  getMatrixElementsSum
};

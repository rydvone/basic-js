const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const arrInner =  [];
  for(let el of matrix) {
    const arrInnerTemp = el.map(elInner => elInner = 0)
    arrInner.push(arrInnerTemp);
  }
 
  function incElemPrev(ind1, ind2) {
    arrInner[ind1][ind2]++;
    if((ind2 - 1) >= 0) {
      arrInner[ind1][ind2-1]++;
    }
    if((ind2 + 1) < arrInner.length) {
      arrInner[ind1][ind2+1]++;
    }
  }

  function incElemNext(ind1, ind2) {
    arrInner[ind1][ind2]++;
    if((ind2 - 1) >= 0) {
      arrInner[ind1][ind2-1]++;
    }
    if((ind2 + 1) < arrInner.length) {
      arrInner[ind1][ind2+1]++;
    }
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === true) {
        if((i - 1) >= 0) {
          incElemPrev((i-1), j);
        }
        if((i + 1) < matrix.length) {
          incElemNext((i+1), j);
        }
        if((j-1) >= 0) {
          arrInner[i][j-1]++;
        }
        if((j+1) >= 0) {
          arrInner[i][j+1]++;
        }
      }
    }
  }
  return arrInner;
}

module.exports = {
  minesweeper
};

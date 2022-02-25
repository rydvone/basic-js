const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  let numCats = "";
  console.log('arguments' + arguments);
  for (let item of arguments) {
    for (let inde of item) {
      // console.log(inde);
      // numCats += inde.filter((el) => el == "^^");
      // console.log(numCats);
      for (let el of inde) {
        if (el == "^^") {
          numCats++;
        }
      }
    }
  }
  console.log("numCats = " + numCats);
  return numCats; 
}

module.exports = {
  countCats
};

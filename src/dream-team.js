const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  let str = '';
  if (!(Array.isArray(members))) {
    return false;
  }
  for(let el of members) {
    if (typeof(el) == 'string') {
      for(let innerElem of el) {
        if (innerElem >= 'A' && innerElem <='z') {
          str += innerElem.toUpperCase();
          break;
        }
      }      
    }
  }
  let arr = (str.split('')).sort();
  return arr.join('');
}

module.exports = {
  createDreamTeam
};

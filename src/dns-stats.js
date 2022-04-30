const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(dom) {
  throw new NotImplementedError('Not implemented');
  
//   const obj = {};
//   let arrAll = [];

//   //find all domain and add to array
//   for (let el of dom) {
//     let arr = [];
//     let iTemp = el.length;
//     for (let i = el.length; i > 0; i--) {
//       if (el[i] == '.' && arr.length != 0) {
//         arr.push(arr[arr.length-1] + el.slice(i, iTemp));
//         iTemp = i;
//       }
//       if (el[i] == '.' && arr.length == 0) {     
//         arr.push( el.slice(i, iTemp));
//         iTemp = i;
//       }
//     }
//     arr.push(arr[arr.length-1] + '.' + el.slice(0, iTemp));
//     arrAll.push(...arr);
//   }

// //group domain in object
//   while (arrAll.length > 0) {
//     let countDom = 1;
//     let firstEl = arrAll.shift();
//     arrAll.forEach((elem,ind) => {
//       if (elem == firstEl) {
//         countDom++;
//         arrAll.splice(ind,1);
//       }
//     });
//     obj[firstEl] = countDom;
//   }
//   return obj;
}

module.exports = {
  getDNSStats
};

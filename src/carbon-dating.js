const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  throw new NotImplementedError('Not implemented');
  let k,
      temp,
      res;
    
    if (typeof(abs) === 'string') {
    // k = 1.22e-4;
    k = 0.693 / HALF_LIFE_PERIOD;
    k = Math.round(k * 1000000) / 1000000;
    console.log('k = ' + k);
    temp = Math.log(MODERN_ACTIVITY / abs);
    temp = Math.ceil(temp * 1000) / 1000;
    console.log('temp = ' + temp);
    res = Math.ceil(temp / k);
    console.log('res = ' + res);
    return res;  
  } else {
    return false;
  }
   
}

module.exports = {
  dateSample
};

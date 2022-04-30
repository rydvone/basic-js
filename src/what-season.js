const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  let str = '';

  if(date == undefined) {
    return str = 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if(Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let monthDate = new Date(date).getMonth();
  if(monthDate == 11 || monthDate == 0 || monthDate == 1) {
    str = 'winter';
  }
  if(monthDate == 2 || monthDate == 3 || monthDate == 4) {
    str = 'spring';
  }
  if(monthDate == 5 || monthDate == 6 || monthDate == 7) {
    str = 'summer';
  }
  if(monthDate == 8 || monthDate == 9 || monthDate == 10) {
    str = 'autumn';
  }

  return str;
}

module.exports = {
  getSeason
};

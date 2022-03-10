const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  
  let strAdd = '';
  let separatorLength = 0;
  let additionSeparatorLength = 0;

  if('addition' in options) {
    strAdd += options.addition;
  }
  if('additionSeparator' in options) {
    additionSeparatorLength = options.additionSeparator.length;
    strAdd += options.additionSeparator;
  }
  if(!('additionSeparator' in options)) {
    additionSeparatorLength = 1;
    strAdd += '|';
  }
  if('additionRepeatTimes' in options) {
    strAdd = strAdd.repeat(options.additionRepeatTimes);    
  }
  strAdd = strAdd.slice(0, strAdd.length - additionSeparatorLength);
  
  str += strAdd;  
  if('separator' in options) {
    separatorLength = options.separator.length;
    str += options.separator;
  }
  if(!('separator' in options)) {
    separatorLength = 1;
    str += '+';
  }
  if('repeatTimes' in options) {
    str = str.repeat(options.repeatTimes);
  }
  str = str.slice(0, str.length - separatorLength);

  return str;
}

module.exports = {
  repeater
};

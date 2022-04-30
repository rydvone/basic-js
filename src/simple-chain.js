const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrMain : [],
  getLength() {
    // throw new NotImplementedError('Not implemented');

    return this;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    let valueInner = `( ${value} )`;
    if (typeof value === 'undefined') {
      valueInner = '( empty )'
      // throw new Error("Incorrect arguments!");
    }
    console.log('this.arrMain before add = ', this.arrMain);
    this.arrMain.push(valueInner)

    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    const isPositionInteger = typeof position === 'number' 
          && Number.isInteger(position)
          && isFinite(position) 
          && Math.floor(position) === position;

    if (!(isPositionInteger) ||
          position <= 0 || position > this.arrMain.length) {
      this.arrMain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    console.log('this.arrMain length = ', this.arrMain.length);
    let temp = this.arrMain.splice((position - 1), 1);
        
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    const reversed = this.arrMain.reverse();
    this.arrMain = reversed;

    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    const resultString = this.arrMain.join('~~');
    this.arrMain = [];
    return resultString;
  }
};

module.exports = {
  chainMaker
};

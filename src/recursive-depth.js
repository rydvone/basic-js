const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
    this.cur = 1;
    this.max = 0;
  }
  calculateDepth(arr = this.arr, cur = this.cur, max = this.max) {
    // throw new NotImplementedError('Not implemented');
    
    if (cur > max) {
      max = cur;
    }
    for (const el of arr) {
      if (Array.isArray(el)) {
        max = this.calculateDepth(el, cur + 1, max);
      }
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};

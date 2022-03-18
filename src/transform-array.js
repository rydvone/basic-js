const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
 // throw new NotImplementedError('Not implemented');

 if(!(arr instanceof Array)) {
  throw new Error (`'arr' parameter must be an instance of the Array!`);
}
let arrCopy = [...arr];
for(let i = 0; i < arrCopy.length; i++) {
  if(arrCopy[i] == `--discard-next`) {
    console.log('1');
    if(i == (arrCopy.length - 1) ) {
      continue;
    } else {
      arrCopy.splice(i+1, 1);
    }
  }
  if(arrCopy[i] == `--discard-prev`) {
    console.log('2');
    if (i == 0 ) {
      continue;
    } else {
      arrCopy.splice(i-1, 1);
    }
  }
  if(arrCopy[i] == `--double-next`) {
    console.log('3');
    if (i == (arrCopy.length - 1)) {
      continue;
    } else {
      arrCopy.splice(i+2, 0, arrCopy[i + 1]);
    }
  }
  if(arrCopy[i] == `--double-prev`) {
    console.log('4');
    if (i == 0  )  {
      continue;
    } else {
      arrCopy.splice(i-2, 0, arrCopy[i - 1]);
    }
    i++;      
  }
  // console.log(arrCopy);
}


for (let i = 0; i < arrCopy.length; i++) {
  if (arrCopy[i] == `--discard-next` || arrCopy[i] == `--discard-prev` || arrCopy[i] == `--double-next` || arrCopy[i] == `--double-prev`) {
    arrCopy.splice(i, 1);
    i--;
  }
}

return arrCopy;
}

module.exports = {
  transform
};

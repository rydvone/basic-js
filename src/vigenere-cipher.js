const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(checkDirection) {
    this.checkDirection = checkDirection;
  }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error("Incorrect arguments!");
    }
    const tableVigenere = function (firstLetter, secondLetter) {
      const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z']
      let table = [];

      for (let i = 0; i < alphabet.length; i++) {
        let alphabetInner = [...alphabet];
        let temp = alphabetInner.splice(0, i);

        alphabetInner.push(...temp);
        table.push(alphabetInner);
      }

      let numLetterFirst = alphabet.indexOf(firstLetter);
      let numLetterSecond = alphabet.indexOf(secondLetter);
      let resultLetter = table[numLetterFirst][numLetterSecond];
      return resultLetter;
    }

    const regEngSymb = /([A-Za-z])/gi;
    let messageUpper = message.replace(regEngSymb, (el) => el.toUpperCase());
    if (this.checkDirection === false) {
      let reversedMessageTemp = messageUpper.split('');
      messageUpper = reversedMessageTemp.reverse().join('');
    }

    let messageOnlyLetterInner = messageUpper.match(regEngSymb);
    let keyUpper = key.replace(regEngSymb, (el) => el.toUpperCase());
    let countRepeatKey = Math.ceil(messageOnlyLetterInner.length / key.length);
    let keyOnlyLetterInner = keyUpper.repeat(countRepeatKey).slice(0, messageOnlyLetterInner.length).split('');

    if (this.checkDirection === false) {
      keyOnlyLetterInner.reverse();
    }

    let resultOnlyLetterInner = [];
    for (let i = 0; i < messageOnlyLetterInner.length; i++) {
      resultOnlyLetterInner.push(tableVigenere(messageOnlyLetterInner[i], keyOnlyLetterInner[i]))
    }

    let resultInner = messageUpper.replace(regEngSymb, (el) => {
      return el = resultOnlyLetterInner.shift();
    });
    let resultWord = resultInner;
    return resultWord;
  }


  decrypt(message = this.message, key = this.key) {
    // throw new NotImplementedError('Not implemented');
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error("Incorrect arguments!");
    }
    const tableVigenereDecrypt = function (firstLetter, secondLetter) {
      const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z']
      let table = [];

      for (let i = 0; i < alphabet.length; i++) {
        let alphabetInner = [...alphabet];
        let temp = alphabetInner.splice(0, i);

        alphabetInner.push(...temp);
        table.push(alphabetInner);
      }

      let numLetterSecond = alphabet.indexOf(secondLetter);
      let numLetterFirst = table[numLetterSecond].indexOf(firstLetter);
      let resultLetter = alphabet[numLetterFirst];
      return resultLetter;
    }

    const regEngSymb = /([A-Za-z])/gi;
    let messageUpper = message.replace(regEngSymb, (el) => el.toUpperCase());
    if (this.checkDirection === false) {
      let reversedMessageTemp = messageUpper.split('');
      messageUpper = reversedMessageTemp.reverse().join('');
    }

    let messageOnlyLetterInner = messageUpper.match(regEngSymb);
    let keyUpper = key.replace(regEngSymb, (el) => el.toUpperCase());
    let countRepeatKey = Math.ceil(messageOnlyLetterInner.length / key.length);
    let keyOnlyLetterInner = keyUpper.repeat(countRepeatKey).slice(0, messageOnlyLetterInner.length).split('');

    if (this.checkDirection === false) {
      keyOnlyLetterInner.reverse();
    }
    let resultOnlyLetterInner = [];
    for (let i = 0; i < messageOnlyLetterInner.length; i++) {
      resultOnlyLetterInner.push(tableVigenereDecrypt(messageOnlyLetterInner[i], keyOnlyLetterInner[i]))
    }

    let resultInner = messageUpper.replace(regEngSymb, (el) => {
      return el = resultOnlyLetterInner.shift();
    });
    let resultWord = resultInner;
    return resultWord;
  }
}

module.exports = {
  VigenereCipheringMachine
};

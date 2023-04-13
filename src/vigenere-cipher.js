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
  constructor(direct = true) {
    this.direct = direct;
  }

  insertAtIndex(str, substring, index) {
    return str.slice(0, index) + substring + str.slice(index);
  }

  commonCase(string, key) {
    let str = string.toUpperCase();
    let newKey = key.toUpperCase();
    newKey = newKey.padEnd(str.length, `${newKey}`);
    return [str, newKey]
  }
  encrypt(string, key) {
    if (typeof string === 'undefined' || typeof key === 'undefined') throw Error('Incorrect arguments!');
    let [str, newKey] = this.commonCase(string, key);
    let alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').repeat(5);
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        let stringIndex = alphabet.indexOf(str[i]);
        let keyIndex = alphabet.indexOf(newKey[i]);
        result = `${result}${alphabet[stringIndex + keyIndex]}`
      } else {
        newKey = this.insertAtIndex(newKey, str[i], i);
        result = `${result}${str[i]}`;
      }
    }
    if (this.direct) {
      result
    } else {
      result = result.split('').reverse().join('')
    }
    return result;
  }
  decrypt(string, key) {
    if (typeof string === 'undefined' || typeof key === 'undefined') throw Error('Incorrect arguments!');
    let [str, newKey] = this.commonCase(string, key);
    let alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').repeat(5);
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        let stringIndex = alphabet.lastIndexOf(str[i]);
        let keyIndex = alphabet.indexOf(newKey[i]);
        result = `${result}${alphabet[stringIndex - keyIndex]}`
      } else {
        newKey = this.insertAtIndex(newKey, str[i], i);
        result = `${result}${str[i]}`;
      }
    }
    if (this.direct) {
      result
    } else {
      result = result.split('').reverse().join('')
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};

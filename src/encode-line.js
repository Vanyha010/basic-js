const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let num = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      num++;
    } else {
      result.push(`${num}${str[i - 1]}`)
      num = 1;
    }
    if (i == str.length - 1) {
      result.push(`${num}${str[i]}`)
    }
  }
  return result.join('').replaceAll('1', '')
}

module.exports = {
  encodeLine
};

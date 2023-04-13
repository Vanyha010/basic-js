const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  str = n.toString()
  for (let i = 0; i < str.length; i++) {
    let short = str.replace(str[i], '')
    result.push(Number(short))
  }
  result.sort((a, b) => b - a)
  return result[0];
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = matrix[0].reduce((acc, item) => acc += item, 0);
  for (let i = 1; i < matrix.length; i++) {
    for (let index = 0; index < matrix[i].length; index++) {
      if (matrix[i - 1][index] === 0) {
        continue;
      } else {
        result += matrix[i][index];
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};

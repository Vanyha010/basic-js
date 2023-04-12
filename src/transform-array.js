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
function transform(arr) {
  if (!(arr instanceof Array)) throw Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  if (arr.length > 0) {
    arr.forEach((el, i) => {
      if (el === '--double-prev') result.push(result[i-1]);
      else if (el === '--double-next') result.push(arr[i+1]);
      else if (el === '--discard-prev') {
        result[i-1] = undefined;
        result.push(undefined);
      }
      else if (el === '--discard-next') {
        result.push(undefined);
      }
      else if (arr[i-1] === '--discard-next') {
        result.push(undefined);
      }
      else result.push(el);
    });
  }
  return result.filter(el => typeof el !== 'undefined');
}

module.exports = {
  transform
};

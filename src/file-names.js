const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let fileNames = {};
  let result = names.map(function(item) {
    if (!fileNames.hasOwnProperty(item)) {
      fileNames[item] = 1;
      console.log(fileNames)
      return item;
    } else {
      const newItem = `${item}(${fileNames[item]})`;
      fileNames[item]++;
      
      console.log(newItem)
      fileNames[newItem] = 1;
      return newItem;
    }
  })
  return result;
}

module.exports = {
  renameFiles
};

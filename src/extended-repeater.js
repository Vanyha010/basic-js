const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultAdditional = [];
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = '+';
  }
  if (options.addition === null) {
    options.addition = 'null'
  } else if (typeof options.addition === undefined) {
    console.log(typeof options.addition === undefined)
    options.addition = '';
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    resultAdditional.push(options.addition);
  }
  let additionalString = resultAdditional.join(options.additionSeparator);
  let result = [];
  for (let i = 1; i <= options.repeatTimes; i++) {
    result.push(`${str}${additionalString}`);
  }
  let actualString = result.join(options.separator);

  return actualString;
}


module.exports = {
  repeater
};

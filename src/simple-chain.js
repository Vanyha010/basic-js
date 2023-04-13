const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value = ' ') {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) == false || position < 1 || position > this.result.length) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const final = this.result.join('~~');
    this.result = [];
    return final;
  }
};

module.exports = {
  chainMaker
};

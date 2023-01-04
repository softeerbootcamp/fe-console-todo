const bracketReg = new RegExp(/^\[.*\]$/);
const singleQuoteReg = new RegExp(/^\'.*\'$/);
const doubleQuoteReg = new RegExp(/^\".*\"$/);

module.exports = { bracketReg, singleQuoteReg, doubleQuoteReg };

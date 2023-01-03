const { COMMAND, ERROR, STATUS, NOT_FOUND } = require('./constants');
const { bracketReg, singleQuoteReg, doubleQuoteReg } = require('./regex');
function commandValidator(cmd) {
  if (
    !(
      cmd === COMMAND.SHOW ||
      cmd === COMMAND.ADD ||
      cmd === COMMAND.DELETE ||
      cmd === COMMAND.UPDATE ||
      cmd === COMMAND.QUIT
    )
  )
    throw new Error(ERROR.INVALID_COMMAND);
}

function statusValidator(status) {
  if (
    !(
      status === STATUS.ALL ||
      status === STATUS.DOING ||
      status === STATUS.TODO ||
      status === STATUS.DONE
    )
  )
    throw new Error(ERROR.INVALID_STATUS);
}

function idValidator(idx) {
  if (idx === NOT_FOUND) throw new Error(ERROR.ID_NOT_EXIST);
}

function addValidator(name, tags) {
  if (!name) throw new Error(ERROR.NAME_NOT_EXIST);
  bracketValidator(tags);

  const tagArray = getTagArrayWithoutBracket(tags);
  tagQuoteValidator(tagArray);
}

function getTagArrayWithoutBracket(tags) {
  return tags.slice(1, -1).split(',');
}

function bracketValidator(tags) {
  const hasBracket = bracketReg.test(tags);
  if (!hasBracket) throw new Error(ERROR.INVALID_BRACKET);
}

function tagQuoteValidator(tagArray) {
  tagArray.forEach((ele) => {
    const trimedTag = ele.trim();
    if (
      ele &&
      !(singleQuoteReg.test(trimedTag) || doubleQuoteReg.test(trimedTag))
    )
      throw new Error(ERROR.INVALID_QUOTE);
  });
}

module.exports = {
  commandValidator,
  statusValidator,
  idValidator,
  addValidator,
  getTagArrayWithoutBracket,
};

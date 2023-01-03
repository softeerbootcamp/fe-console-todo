const { COMMAND, ERROR, STATUS, NOT_FOUND } = require('./constants');
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
  const bracketReg = new RegExp(/^\[.*\]$/);
  const singleQuoteReg = new RegExp(/^\'.+\'$/);
  const doubleQuoteReg = new RegExp(/^\".+\"$/);

  const hasBracket = bracketReg.test(tags);
  if (!hasBracket) throw new Error(ERROR.INVALID_BRACKET);

  const tagArr = tags.slice(1, -1).split(',');
  tagArr.forEach((ele) => {
    if (
      ele &&
      !(singleQuoteReg.test(ele.trim()) || doubleQuoteReg.test(ele.trim()))
    )
      throw new Error(ERROR.INVALID_QUOTE);
  });
}

module.exports = {
  commandValidator,
  statusValidator,
  idValidator,
  addValidator,
};

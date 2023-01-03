const { findIdx } = require('./util');
const { MESSAGE } = require('../constants');
const { printCurrentStatus } = require('./util');

function handleUpdate(todos, id, newStatus) {
  const idx = findIdx(todos, parseInt(id));
  if (idx === -1) return;

  const name = todos[idx].name;
  todos[idx].status = newStatus;
  console.log(MESSAGE.UPDATE_MESSAGE(name, newStatus));

  printCurrentStatus(todos);
}

module.exports = { handleUpdate };

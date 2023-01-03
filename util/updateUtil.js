const { findIdx } = require('./util');
const { MESSAGE } = require('../constants');
const { statusValidator } = require('../validator');
const {
  printCurrentStatus,
  printUpdateMessage,
} = require('../View/OutputView');

function handleUpdate(todos, id, newStatus) {
  statusValidator(newStatus);
  const idx = findIdx(todos, parseInt(id));
  if (idx === -1) return;

  const name = todos[idx].name;
  todos[idx].status = newStatus;
  printUpdateMessage(name, newStatus);

  printCurrentStatus(todos);
}

module.exports = { handleUpdate };

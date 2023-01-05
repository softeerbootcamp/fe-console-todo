const { findIdx } = require('./util');
const { statusValidator, idValidator } = require('../validator');
const {
  printCurrentStatus,
  printUpdateMessage,
} = require('../View/OutputView');

function handleUpdate(todos, id, newStatus) {
  statusValidator(newStatus);
  const idx = findIdx(todos, parseInt(id));
  idValidator(idx);

  const name = todos[idx].name;
  todos[idx].status = newStatus;
  printUpdateMessage(name, newStatus);

  printCurrentStatus(todos);
}

module.exports = { handleUpdate };

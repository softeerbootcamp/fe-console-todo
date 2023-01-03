const { findIdx } = require('./util');
const { MESSAGE } = require('../constants');
const {
  printCurrentStatus,
  printDeleteMessage,
} = require('../View/OutputView');

function handleDelete(todos, middle) {
  const id = parseInt(middle);
  const idx = findIdx(todos, id);
  const name = todos[idx].name;
  const status = todos[idx].status;

  if (idx !== -1) {
    todos.splice(idx, 1);
    printDeleteMessage(name, status);
  }
  printCurrentStatus(todos);
}

module.exports = { handleDelete };

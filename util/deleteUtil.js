const { findIdx } = require('./util');
const { idValidator } = require('../validator');
const {
  printCurrentStatus,
  printDeleteMessage,
} = require('../View/OutputView');

function handleDelete(todos, middle) {
  const id = parseInt(middle);
  const idx = findIdx(todos, id);
  idValidator(idx);
  const name = todos[idx].name;
  const status = todos[idx].status;

  todos.splice(idx, 1);
  printDeleteMessage(name, status);
  printCurrentStatus(todos);
}

module.exports = { handleDelete };

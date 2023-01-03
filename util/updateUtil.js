const { findIdx } = require('./util');
const { MESSAGE } = require('../constants');
const {
  printCurrentStatus,
  printUpdateMessage,
} = require('../View/OutputView');

function handleUpdate(todos, id, newStatus) {
  const idx = findIdx(todos, parseInt(id));
  if (idx === -1) return;
  //TODO: newStatus가 todo, doing, done이 아닐 때
  const name = todos[idx].name;
  todos[idx].status = newStatus;
  printUpdateMessage(name, newStatus);

  printCurrentStatus(todos);
}

module.exports = { handleUpdate };

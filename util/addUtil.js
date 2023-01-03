const { STATUS, MESSAGE } = require('../constants');
const { printCurrentStatus } = require('../View/OutputView');
const { printAddMessage } = require('../View/OutputView');

function handleAdd(todos, name, tags) {
  const id = getRandom();
  todos.push({
    name,
    tags: parseTags(tags),
    status: STATUS.TODO,
    id,
  });
  printAddMessage(name, id);
  printCurrentStatus(todos);
}

function parseTags(tags) {
  tags = tags.replaceAll('[', '');
  tags = tags.replaceAll(']', '');
  tags = tags.replaceAll('"', '');
  return tags.split(',');
}

function getRandom() {
  return Math.random();
}
module.exports = { handleAdd };

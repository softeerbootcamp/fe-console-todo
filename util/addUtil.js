const { STATUS, MESSAGE, MAX_TODOS } = require('../constants');
const { printCurrentStatus } = require('../View/OutputView');
const { printAddMessage } = require('../View/OutputView');

function handleAdd(todos, name, tags) {
  const id = getRandom(todos);
  todos.push({
    name,
    tags: parseTags(tags),
    status: STATUS.TODO,
    id,
  });
  printAddMessage(name, id);
  printCurrentStatus(todos);
}

function parseTags(tags = '') {
  tags = tags.replaceAll('[', '');
  tags = tags.replaceAll(']', '');
  tags = tags.replaceAll('"', '');
  return tags.split(',');
}

function getRandom(todos) {
  const arr = [];
  todos.forEach((ele) => {
    arr[ele.id] = 1;
  });
  for (let i = 0; i < arr.length; i += 1) {
    if (!arr[i]) return i;
  }
  return arr.length;
}
module.exports = { handleAdd };

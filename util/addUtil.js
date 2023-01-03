const { STATUS } = require('../constants');
const { printCurrentStatus } = require('./util');

function handleAdd(todos, name, tags) {
  todos.push({
    name,
    tags: parseTags(tags),
    status: STATUS.TODO,
    id: getRandom(),
  });
  console.log(todos);
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

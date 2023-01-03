const { STATUS, STATUS_IDX, MESSAGE } = require('../constants');
function parseCommand(cmd) {
  return cmd.split('$');
}

function numOfStatus(todos) {
  const numOfTodo = todos.filter((ele) => ele.status === STATUS.TODO).length;
  const numOfDoing = todos.filter((ele) => ele.status === STATUS.DOING).length;
  const numOfDone = todos.filter((ele) => ele.status === STATUS.DONE).length;
  return [numOfTodo, numOfDoing, numOfDone];
}

function findIdx(todos, id) {
  return todos.findIndex((ele) => ele.id === id);
}

module.exports = { parseCommand, findIdx, numOfStatus };

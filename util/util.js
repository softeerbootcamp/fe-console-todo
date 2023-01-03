const { STATUS } = require('../constants');
const { commandValidator } = require('../validator');
function parseCommand(cmd) {
  const cmdArr = cmd.split('$');
  const [command] = cmdArr;
  commandValidator(command);
  return cmdArr;
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

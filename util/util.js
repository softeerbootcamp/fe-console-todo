const { STATUS, STATUS_IDX, MESSAGE } = require('../constants');
function parseCommand(cmd) {
  return cmd.split('$');
}

function printCurrentStatus(todos) {
  const statusAmount = numOfStatus(todos);
  console.log(
    `${MESSAGE.CURRENT_STATUS} todo: ${
      statusAmount[STATUS_IDX.TODO]
    }개, doing:${statusAmount[STATUS_IDX.DOING]}개, done:${
      statusAmount[STATUS_IDX.DONE]
    }개`
  );
}

function numOfStatus(todos) {
  const numOfTodo = todos.filter(ele => ele.status === STATUS.TODO).length;
  const numOfDoing = todos.filter(ele => ele.status === STATUS.DOING).length;
  const numOfDone = todos.filter(ele => ele.status === STATUS.DONE).length;
  return [numOfTodo, numOfDoing, numOfDone];
}

module.exports = { printCurrentStatus, parseCommand };

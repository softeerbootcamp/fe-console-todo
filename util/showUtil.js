const { COMMAND } = require('../constants');
const { printCurrentStatus, printShowMessage } = require('../View/OutputView');
const { statusValidator } = require('../validator');
function handleShow(todos, status) {
  statusValidator(status);
  if (status === COMMAND.ALL) {
    printCurrentStatus(todos);
    return;
  }
  const filteredList = todos
    .filter((ele) => ele.status === status)
    .map((ele) => `'${ele.name}, ${ele.id}번'`);
  printShowMessage(status, filteredList);
}

module.exports = { handleShow };

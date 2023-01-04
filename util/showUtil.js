const { COMMAND } = require('../constants');
const {
  printCurrentStatus,
  printShowMessage,
  printData,
} = require('../View/OutputView');
const { statusValidator, idValidator } = require('../validator');
const { findIdx } = require('./util');

function handleShow(todos, status) {
  const id = parseInt(status);
  if (Number.isInteger(id)) {
    handleShowFromId(todos, id);
    return;
  }
  handleShowFromStatus(todos, status);
}

function handleShowFromId(todos, id) {
  const idx = findIdx(todos, id);
  idValidator(idx);
  const [data] = todos.filter((ele) => ele.id === id);
  printData(data);
}

function handleShowFromStatus(todos, status) {
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

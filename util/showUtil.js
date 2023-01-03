const { COMMAND } = require('../constants');
const { printCurrentStatus } = require('./util');

function handleShow(todos, status) {
  if (status === COMMAND.ALL) {
    printCurrentStatus(todos);
    return;
  }
  const filteredList = todos
    .filter(ele => ele.status === status)
    .map(ele => `'${ele.name}, ${ele.id}번'`);
  console.log(
    `${status}리스트 : 총 ${filteredList.length}건 : ${filteredList.join(',')}`
  );
}

module.exports = { handleShow };

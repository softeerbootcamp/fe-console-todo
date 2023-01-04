const { numOfStatus } = require('../util/util');
const { STATUS_IDX, MESSAGE } = require('../constants');
function printAddMessage(name, id) {
  console.log(MESSAGE.ADD_MESSAGE(name, id));
}

function printCurrentStatus(todos) {
  const statusAmount = numOfStatus(todos);
  console.log(
    `${MESSAGE.CURRENT_STATUS} todo: ${
      statusAmount[STATUS_IDX.TODO]
    }개, doing:${statusAmount[STATUS_IDX.DOING]}개, done:${
      statusAmount[STATUS_IDX.DONE]
    }개\n`
  );
}

function printShowMessage(status, filteredList) {
  const listDesc =
    filteredList.length === 0
      ? '자료가 없습니다.'
      : `총 ${filteredList.length}건 : ${filteredList.join(' , ')}`;
  console.log(`${status}리스트 : ${listDesc}\n`);
}

function printDeleteMessage(name, status) {
  console.log(MESSAGE.DELETE_MESSAGE(name, status));
}

function printUpdateMessage(name, newStatus) {
  console.log(MESSAGE.UPDATE_MESSAGE(name, newStatus));
}

function printData(data) {
  console.log(data);
}

module.exports = {
  printDeleteMessage,
  printAddMessage,
  printCurrentStatus,
  printShowMessage,
  printUpdateMessage,
  printData,
};

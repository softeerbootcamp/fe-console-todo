const { STATUS } = require('../constants');
const { printCurrentStatus } = require('../View/OutputView');
const { printAddMessage } = require('../View/OutputView');
const { addValidator, getTagArrayWithoutBracket } = require('../validator');

function handleAdd(todos, name, tags) {
  addValidator(name, tags);
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

function parseTags(tags) {
  tagArr = getTagArrayWithoutBracket(tags);
  tagArrWithoutQuote = tagArr
    .map((ele) => ele.trim().slice(1, -1))
    .filter((ele) => ele !== '');
  const tagSet = new Set(tagArrWithoutQuote);
  return [...tagSet];
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

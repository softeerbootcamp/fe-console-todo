const { STATUS } = require('../constants');
const { idPool } = require('../todos');
const { printCurrentStatus } = require('../View/OutputView');
const { printAddMessage } = require('../View/OutputView');
const { addValidator, getTagArrayWithoutBracket } = require('../validator');

function handleAdd(todos, name, tags) {
  addValidator(name, tags);
  const id = getRandom();
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

function getRandom() {
  for (let i = 0; i < idPool.length; i += 1) {
    if (!idPool[i]) return i;
  }
  idPool[idPool.length] = 1;
  return idPool.length;
}
module.exports = { handleAdd };

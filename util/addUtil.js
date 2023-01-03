const { STATUS, MESSAGE } = require("../constants");
const { printCurrentStatus } = require("./util");

function handleAdd(todos, name, tags) {
  const id = getRandom();
  todos.push({
    name,
    tags: parseTags(tags),
    status: STATUS.TODO,
    id,
  });
  console.log(MESSAGE.ADD_MESSEAGE(name, id));
  printCurrentStatus(todos);
}

function parseTags(tags) {
  tags = tags.replaceAll("[", "");
  tags = tags.replaceAll("]", "");
  tags = tags.replaceAll('"', "");
  return tags.split(",");
}

function getRandom() {
  return Math.random();
}
module.exports = { handleAdd };

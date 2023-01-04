const commandTypes = Object.freeze({
  SHOW: "show",
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete",
  FIN: "fin",
});

const showOptions = Object.freeze({
  ALL: "all",
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
});

const statusTypes = Object.freeze({
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
});

const resultCodes = Object.freeze({
  FIN: -1,
});

module.exports = {
  commandTypes,
  showOptions,
  statusTypes,
  resultCodes,
};

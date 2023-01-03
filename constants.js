const MESSAGE = {
  ENTER_COMMAND: '명령하세요 :',
  CURRENT_STATUS: '현재상태 :',
  TODO_LIST: 'todo리스트 :',
};
const COMMAND = {
  SHOW: 'show',
  ADD: 'add',
  DELETE: 'delete',
  UPDATE: 'update',
  ALL: 'all',
};

const STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
};
const STATUS_IDX = {
  TODO: 0,
  DOING: 1,
  DONE: 2,
};

module.exports = { MESSAGE, COMMAND, STATUS, STATUS_IDX };

const MESSAGE = {
  ENTER_COMMAND: '명령하세요 : ',
  CURRENT_STATUS: '현재상태 :',
  TODO_LIST: 'todo리스트 :',
  ADD_MESSAGE: (name, id) => `${name} 1개가 추가됐습니다. (id : ${id})`,
  DELETE_MESSAGE: (name, status) =>
    `${name} ${status}가 목록에서 삭제됐습니다.`,
  UPDATE_MESSAGE: (name, status) =>
    `${name}가 ${status}으로 상태가 변경됐습니다.`,
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
  ALL: 'all',
};
const STATUS_IDX = {
  TODO: 0,
  DOING: 1,
  DONE: 2,
};

const ERROR = {
  INVALID_COMMAND: '[ERROR] 명령어가 잘못되었습니다.\n',
  INVALID_STATUS: '[ERROR] 잘못된 상태를 입력하였습니다.\n',
};

module.exports = { MESSAGE, COMMAND, STATUS, STATUS_IDX, ERROR };

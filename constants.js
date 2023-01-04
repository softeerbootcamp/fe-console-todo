const MESSAGES = {
    ENTER_COMMAND: '명령하세요: ("exit" to fisnish) ',
    SHOW_STATUS: (status, size) => `${status}리스트 : 총${size}건`,
    ADD_MESSAGE: (name, id) => `${name} 1개가 추가됐습니다. (id: ${id})`,
    DELETE_MESSAGE: (name, status) => `${name} ${status}가 목록에서 삭제됐습니다.`,
    UPDATE_MESSAGE: (name, status) => `${name}가 ${status}으로 상태가 변경됐습니다`
}

const SHOW_STATUS = {
    TODO: 'todo',
    DOING: 'doing',
    DONE: 'done',
    ALL: 'all'
}

const ERROR_MESSAGE = {
    ERROR_COMMAND: `[ERROR] 잘못된 입력입니다. 올바르게 입력해주세요.`,
    ERROR_STATUS: `[ERROR] 올바른 STATUS를 입력해주세요`,
    ERROR_ID_MISSING: (id) => `[ERROR] 해당 ID : ${id}가 없습니다`,
    ERROR_PARSE: `[ERROR] $를 올바른 위치에 입력해주세요`
}

module.exports = {MESSAGES, SHOW_STATUS, ERROR_MESSAGE};
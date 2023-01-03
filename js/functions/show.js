const output = require('../io/output')
const io = require('../io/ioException')

function all() {
    // 현재상태: todo: 3개, doing: 2개, done: 4개
    output.showCurrentStatus()
}

function thisStatus(statusName) {
    // status input 예외처리
    io.statusCheck(statusName)

    // 총2건 : '자바스크립트 공부하기, 1822번', 'iOS공부하기, 9933번'
    output.showThisStatus(statusName)
}

module.exports.all = all;
module.exports.thisStatus = thisStatus
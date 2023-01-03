const data = require('../data')
const output = require('../io/output')
const io = require('../io/ioException')

function status(idNumber, statusName) {
    //todos리스트에서 주어진 id의 index찾기
    const itemIndex = io.findIndex(idNumber)
    //status 예외처리
    io.statusCheck(statusName)

    //기존 status 저장
    const pastStatus = data.todos[itemIndex].status

    //공부하기가 doing으로 상태가 변경됐습니다
    output.showUpdateResult(pastStatus,statusName)

    //currentStatus의 value 변경
    data.currentStatus[data.todos[itemIndex].status] -= 1
    data.currentStatus[statusName] += 1

    //status 업데이트
    data.todos[itemIndex].status = statusName

    output.showCurrentStatus()
}

module.exports.status = status;
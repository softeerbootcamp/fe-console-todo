const data = require('../data')
const output = require('../io/output')
const io = require('../io/ioException')

function item(idNumber) {
    const itemIndex = io.findIndex(idNumber)
    const itemName = data.todos[itemIndex].id
    const statusName = data.todos[itemIndex].status

    output.showDeleteResult(itemName,statusName)//공부하기 todo가 목록에서 삭제됐습니다

    data.currentStatus[statusName] -= 1
    output.showCurrentStatus()
    data.todos.splice(itemIndex, 1);
}
module.exports.item = item;
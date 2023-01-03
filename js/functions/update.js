var data = require('../data')

function update(id, statusName) {
    for (i in data.todos) {
        if (data.todos[i].id == id) {
            console.log(data.todos[i].status + '가 ' + statusName + '으로 상태가 변경되었습니다.')

            // updating currentStatus
            data.currentStatus[data.todos[i].status] -= 1
            data.currentStatus[statusName] += 1

            data.todos[i].status = statusName

            // MARK: can be turned into show.js/all function
            console.log(
                "현재상태: " +
                "todo: " + data.currentStatus['todo'] + "개, " +
                "doing: " + data.currentStatus['doing'] + "개, " +
                "done: " + data.currentStatus['done'] + "개"
            )
            return
        }
    }
    console.log('해당 ID의 할것이 없습니다.')
}

module.exports.update = update;
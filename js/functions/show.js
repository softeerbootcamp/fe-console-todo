var data = require('../data')

function all() {
    // 현재상태: todo: 3개, doing: 2개, done: 4개
    console.log(
        "현재상태: " +
        "todo: " + data.currentStatus['todo'] + "개, " +
        "doing: " + data.currentStatus['doing'] + "개, " +
        "done: " + data.currentStatus['done'] + "개"
    )
}

function status(statusName) {
    // 총2건 : '자바스크립트 공부하기, 1822번', 'iOS공부하기, 9933번'
    let msg = statusName + "리스트: 총" + data.currentStatus[statusName] + "건:"

    for (i in data.todos) {
        if (data.todos[i]['status'] == statusName) {
            msg += ' \'' + data.todos[i]['name'] + ', ' + data.todos[i]['id'] + '번' + '\','
        }
    }

    console.log(msg.slice(0, -1))
}

module.exports.all = all;
module.exports.status = status
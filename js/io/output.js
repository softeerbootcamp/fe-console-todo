var data = require('../data')

function showCurrentStatus() {
    // 현재상태: todo: 3개, doing: 2개, done: 4개
    console.log(
        "현재상태: " +
        "todo: " + data.currentStatus['todo'] + "개, " +
        "doing: " + data.currentStatus['doing'] + "개, " +
        "done: " + data.currentStatus['done'] + "개\n"
    )
}

function showThisStatus(statusName) {
    // 총2건 : '자바스크립트 공부하기, 1822번', 'iOS공부하기, 9933번'
    let msg = statusName + "리스트: 총" + data.currentStatus[statusName] + "건:"

    for (i in data.todos) {
        if (data.todos[i]['status'] == statusName) {
            msg += ' \'' + data.todos[i]['name'] + ', ' + data.todos[i]['id'] + '번' + '\','
        }
    }

    console.log(msg.replace(/,\s*$/, '\n'))
}
function showAddResult(itemName,id){
    let msg =""
    msg += itemName+" 1개가 추가됐습니다.(id: "+id+")"
    console.log(msg)
    // 공부하기 1개가 추가됐습니다.(id : 7788)
}
function showDeleteResult(itemName,statusName){
    let msg =""
    msg += itemName+" "+statusName+"가 목록에서 삭제됐습니다."
    console.log(msg)
    // 공부하기 1개가 추가됐습니다.(id : 7788)
}
function showUpdateResult(pastStatus,statusName){
    let msg =""
    msg += pastStatus+'가 ' + statusName + '으로 상태가 변경되었습니다.'
    console.log(msg)
}

module.exports.showCurrentStatus = showCurrentStatus;
module.exports.showThisStatus = showThisStatus;
module.exports.showAddResult = showAddResult;
module.exports.showDeleteResult = showDeleteResult;
module.exports.showUpdateResult = showUpdateResult;
var data = require('../data')
var output = require('../io/output')
function status(idNumber, statusName) {
    
    const itemIndex = data.binarySearch(idNumber)
    const pastStatus = data.todos[itemIndex].status
    output.showUpdateResult(pastStatus,statusName)
    data.currentStatus[data.todos[itemIndex].status] -= 1
    data.currentStatus[statusName] += 1

    data.todos[itemIndex].status = statusName

    output.showCurrentStatus()

   // console.log('해당 ID의 할것이 없습니다.')
}

module.exports.status = status;
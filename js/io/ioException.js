
var output = require('../io/output')
const commandList = ['show','add','delete','update']
const statusList = ['todo','doing','done']


function isValidCommand(command) {
    if(statusList.includes(commandList)){
        return true
    }
    output.wrongCommand(command)
    return false
}
function isValidStatus(status) {
    if(statusList.includes(status)){
        return true
    }
    output.wrongStatus(status)
    return false
}

function isValidIndex(index){
    if(index != -1){
        return true
    }
    output.wrongIndex(index)
    return false
}

module.exports.isValidCommand = isValidCommand;
module.exports.isValidStatus = isValidStatus;
module.exports.isValidIndex = isValidIndex;
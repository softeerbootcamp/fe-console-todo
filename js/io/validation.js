
const output = require('./output')
const commandList = ['show', 'add', 'delete', 'update']
const statusList = ['todo', 'doing', 'done']


function isValidCommand(command) {
    if (statusList.includes(commandList)) {
        return true
    }
    output.wrongCommand(command)
    return false
}

function isValidStatus(status) {
    if (statusList.includes(status)) {
        return true
    }
    //output.wrongStatus(status)
    return false
}

function isValidIndex(index) {
    if (index != -1) {
        return true
    }
    //output.wrongIndex(index)
    return false
}

function isEmptyInput(input) {
    if (input === '') return true
    return false
}

function isValidInputsLength(inputList) {
    if (inputList.length > 1) {
        return true
    }
    return false
}

module.exports.isValidCommand = isValidCommand;
module.exports.isValidStatus = isValidStatus;
module.exports.isValidIndex = isValidIndex;
module.exports.isEmptyInput = isEmptyInput;
module.exports.isValidInputsLength = isValidInputsLength;
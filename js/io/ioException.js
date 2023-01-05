const data = require('../data')
const validCheck = require('./validation')

function emptyInputCheck(inputString) {
    if (validCheck.isEmptyInput(inputString)) {
        throw new Error("아무것도 입력되지 않았습니다.")
    }
}
function commandCheck(command) {
    if (!validCheck.isValidCommand(command)) {
        throw new Error(command + "는 잘못된 명령어 입니다.")
    }
}
function inputListLengthCheck(inputList) {
    if (!validCheck.isValidInputsLength(inputList)) {
        throw new Error("추가 명령어를 입력해주세요.")
    }
}
function statusCheck(statusName) {
    if (!validCheck.isValidStatus(statusName)) {
        throw new Error("잘못된 status를 입력하셨습니다. [todo, doing, done]중에 적어주세요.")
    }
}

function findIndex(idNumber) {
    const itemIndex = data.binarySearch(idNumber)
    if (!validCheck.isValidIndex(itemIndex)) {
        throw new Error("입력된 <" + idNumber + ">는 리스트에 없는 id입니다.")
    }
    return itemIndex
}
function emptyItemNameCheck(itemName) {
    if (validCheck.isEmptyInput(itemName)) {
        throw new Error("이름이 입력되지 않았습니다.")
    }
}
module.exports.emptyInputCheck = emptyInputCheck
module.exports.commandCheck = commandCheck
module.exports.inputListLengthCheck = inputListLengthCheck
module.exports.statusCheck = statusCheck
module.exports.findIndex = findIndex
module.exports.emptyItemNameCheck = emptyItemNameCheck
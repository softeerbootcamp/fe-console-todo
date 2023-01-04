const readlineSync = require('readline-sync');
const io = require('./ioException')

function command() {
    const inputString = getUserInput()
    io.emptyInputCheck(inputString)
    const inputList = string2List(inputString)
    io.commandCheck(inputList[0])

    //io.inputListLengthCheck(inputList)
    return inputList
}

const getUserInput = () => {
    const input = readlineSync.question('명령하세요: ');
    return input;
}
const string2List = (inputString) => {
    return inputString.split('$')
}

module.exports.command = command
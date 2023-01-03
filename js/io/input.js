const readlineSync = require('readline-sync');

function command (){
    const inputString = getUserInput()
    const inputList = string2List(inputString)
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
const { statusTypes } = require("../Constants");
const { MalformedSecondArgument, MalformedFirstArgument } = require("../TodoErrors");
const Command = require("./Command");
const { getShowAllResult } = require("./Show");
const { findTodoIdx } = require("./Utils");

class UpdateCommand extends Command {
    constructor(arg1, arg2) {
        super(arg1, arg2);
    }

    execute(todos, callback) {
        const idCondition = parseInt(this.getArg1());
        const newStatus = this.getArg2();
        vailidateArgs(idCondition, newStatus);
        let result = updateAndGetResult(todos, idCondition, newStatus);
        result += getShowAllResult(todos);
        callback(result);
    }
}

function vailidateArgs(idCondition, newStatus) {
    if (Number.isNaN(idCondition)) {
        throw MalformedFirstArgument;
    }
    if (newStatus !== statusTypes.TODO && 
        newStatus !== statusTypes.DOING && 
        newStatus !== statusTypes.DONE) {
        throw MalformedSecondArgument;
    }
}

function updateAndGetResult(todos, id, newStatus) {
    const foundIdx = findTodoIdx(todos, id);
    if (foundIdx === undefined) {
        return `(id : ${id})은 목록에 없습니다\n`;
    }
    todos[foundIdx].status = newStatus;
    const {name, status} = todos[foundIdx];
    return `${name} ${status}(으)로 상태가 변경됐습니다\n`;
}


module.exports = UpdateCommand;
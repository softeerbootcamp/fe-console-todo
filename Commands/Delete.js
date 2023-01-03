const Command = require("./Command");
const { getShowAllResult } = require("./Show");
const { findTodoIdx } = require("./Utils");

class DeleteCommand extends Command {
    constructor(arg1, arg2) {
        super(arg1, arg2);
    }

    execute(todos, callback) {
        const idCondition = parseInt(this.getArg1());
        vailidateArg(idCondition);
        let result = deleteAndGetResult(todos, idCondition);
        result += getShowAllResult(todos);
        callback(result);
    }
}

function vailidateArg(idCondition) {
    if (Number.isNaN(idCondition)) {
        throw MalformedFirstArgument;
    }
}

function deleteAndGetResult(todos, id) {
    const foundIdx = findTodoIdx(todos, id);
    if (foundIdx === undefined) {
        return `(id : ${id})은 목록에 없습니다\n`;
    }
    const {name, status} = todos.splice(foundIdx, 1)[0];
    return `${name} ${status}(이)가 목록에서 삭제됐습니다\n`;
}

module.exports = DeleteCommand;
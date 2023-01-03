const { MalformedSecondArgument } = require("../TodoErrors");
const Command = require("./Command");
const {getShowAllResult} = require("./Show");

class UpdateCommand extends Command {
    constructor(arg1, arg2) {
        super(arg1, arg2);
    }

    execute(todos, callback) {
        const idCondition = parseInt(this.getArg1());
        const newStatus = this.getArg2();

        let foundIdx, result;
        todos.forEach(({id},idx) => {
            if(id === idCondition) {
                foundIdx = idx;
            } 
        })

        if(newStatus !== 'todo' && newStatus !== 'doing' && newStatus !== 'done' ) {
            throw MalformedSecondArgument;
        }

        if(foundIdx !== undefined) {
            todos[foundIdx].status = newStatus;
            const {name, status} = todos[foundIdx];
            result = `${name} ${status}(으)로 상태가 변경됐습니다\n`;
        } else {
            result = `(id : ${idCondition})은 목록에 없습니다\n`;
        }
        result += getShowAllResult(todos);
        
        callback(result);
    }
}


module.exports = UpdateCommand;
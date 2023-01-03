const Command = require("./Command");
const {getShowAllResult} = require("./Show");

class DeleteCommand extends Command {
    constructor(arg1, arg2) {
        super(arg1, arg2);
    }

    execute(todos, callback) {
        const idCondition = parseInt(this.getArg1());
        let foundIdx, result;
        todos.forEach(({id},idx) => {
            if(id === idCondition) {
                foundIdx = idx;
            } 
        })

        if(foundIdx !== undefined) {
            const {name, status} = todos.splice(foundIdx, 1)[0];
            result = `${name} ${status}(이)가 목록에서 삭제됐습니다\n`;
        } else {
            result = `(id : ${idCondition})은 목록에 없습니다\n`;
        }
        result += getShowAllResult(todos);
        
        callback(result);
    }
}


module.exports = DeleteCommand;
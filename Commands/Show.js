const Command = require("./Command");
const {MalformedFirstArgument} = require("../TodoErrors");

class ShowCommand extends Command {
    constructor(arg1, arg2) {
        super(arg1, arg2);
    }

    execute(todos, callback) {
        const arg1 = this.getArg1();
        let result;
        if (arg1 === 'all') {
            result = getShowAllResult(todos);
        } else if (arg1 === 'todo') {
            result = getShowResult(todos, 'todo');
        } else if (arg1 === 'doing') {
            result = getShowResult(todos, 'doing');
        } else if (arg1 === 'done') {
            result = getShowResult(todos, 'done');
        } else {
            throw MalformedFirstArgument;
        }
        callback(result);
    }
}

function getShowAllResult(todos) {
    let todoCnt =0, doingCnt=0, doneCnt=0;
    todos.forEach(({status}) => {
        if(status === "todo") {
            todoCnt++;
        }else if(status === "doing") {
            doingCnt++;
        }else if(status === "done") {
            doneCnt++;
        }
    });
    return `현재상태 : todo: ${todoCnt}개, doing: ${doingCnt}개, done: ${doneCnt}개\n`;
}

function getShowResult(todos, statusCondition) {
    let totalTodoCnt = 0;
    let resultArr = [];
    todos.forEach(({name, status, id})=> {
        if (status !== statusCondition) {
            return;
        }
        ++totalTodoCnt;
        resultArr.push(`'${name}, ${id}번'`);
    });
    return `${statusCondition}리스트 : 총${totalTodoCnt}건 : ` + resultArr.join(' , ') + '\n';
}



module.exports = {
    ShowCommand,
    getShowAllResult
};
const Command = require("./Command");
const { MalformedSecondArgument, MalformedFirstArgument } = require("../TodoErrors");
const { getShowAllResult } = require("./Show");
const { statusTypes } = require("../Constants");

class AddCommand extends Command {
    constructor(arg1, arg2) {
        super(arg1, arg2);
    }

    execute(todos, callback) {
        const newName = this.getArg1();
        const newTags = this.getArg2();
        vailidateArgs(newName, newTags);

        const tags = getTags(newTags);
        let result = addAndGetResult(todos, newName, tags);
        result += getShowAllResult(todos);
        callback(result);
    }
}

function vailidateArgs(newName, newTags) {
    if (!newName) {
        throw MalformedFirstArgument;
    }
    if(!/\[(?:"\w+",*\s*)*\]/.test(newTags)) {
        throw MalformedSecondArgument;
    }
}

function getTags(newTags) {
    const matches = newTags.match(/"\w+"/g) || [];
    return matches.map((match) => match.substr(1,match.length-2));
}

function generateId() {
    return Date.now();
}

function addAndGetResult(todos, newName, tags) {
    const id = generateId();
    todos.push({
        name: newName,
        tags: tags,
        status: statusTypes.TODO,
        id: id
    });
    return `${newName} 1개가 추가됐습니다. (id: ${id})\n`
}

module.exports = AddCommand;
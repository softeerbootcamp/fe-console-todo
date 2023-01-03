const Command = require("./Command");
const { MalformedSecondArgument, MalformedFirstArgument } = require("../TodoErrors");
const { getShowAllResult } = require("./Show");

class AddCommand extends Command {
    constructor(arg1, arg2) {
        super(arg1, arg2);
    }

    execute(todos, callback) {
        const newName = this.getArg1();
        const newTags = this.getArg2();

        if (!newName) {
            throw MalformedFirstArgument;
        }

        const checkRegex = /\[(?:"\w+",*\s*)*\]/;
        
        if(!checkRegex.test(newTags)) {
            throw MalformedSecondArgument;
        }

        const catchRegex = /"\w+"/g;
        const matches = newTags.match(catchRegex) || [];
        const tags = matches.map((match) => match.substr(1,match.length-2));

        const id = Date.now();

        todos.push({
            name: newName,
            tags: tags,
            status: 'todo',
            id: id
        });
        
        let result = `${newName} 1개가 추가됐습니다. (id: ${id})\n`;
        result += getShowAllResult(todos);

        callback(result);
    }
}

module.exports = AddCommand;
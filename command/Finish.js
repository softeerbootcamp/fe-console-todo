
const { getFinishResult } = require("../Utils");
const Command = require("./Command");

class FinishCommand extends Command {
    execute(_, callback) {
        callback(getFinishResult());
    }
}

module.exports = FinishCommand;
const { ShowCommand } = require("./Commands/Show");
const DeleteCommand = require("./Commands/Delete")
const AddCommand = require("./Commands/Add")
const { UnknownCommandError } = require("./TodoErrors");
const UpdateCommand = require("./Commands/Update");

const CommandController = {
    buildCommand(commandType, arg1, arg2) {
        if (commandType == 'show') {
            return new ShowCommand(arg1, arg2);
        } else if(commandType === 'delete') {
            return new DeleteCommand(arg1,arg2);
        } else if(commandType === 'update') {
            return new UpdateCommand(arg1, arg2);
        }else if(commandType === 'add') {
            return new AddCommand(arg1, arg2);
        }
        else {
            throw UnknownCommandError;
        }
    }
};

module.exports = CommandController;
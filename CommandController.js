const {
  ShowCommand,
  DeleteCommand,
  UpdateCommand,
  AddCommand,
  FinishCommand,
} = require("./commands");
const { UnknownCommandError } = require("./TodoErrors");
const { commandTypes } = require("./Constants");

const CommandController = {
  buildCommand(commandType, arg1, arg2) {
    if (commandType == commandTypes.SHOW) {
      return new ShowCommand(arg1, arg2);
    } else if (commandType === commandTypes.DELETE) {
      return new DeleteCommand(arg1, arg2);
    } else if (commandType === commandTypes.UPDATE) {
      return new UpdateCommand(arg1, arg2);
    } else if (commandType === commandTypes.ADD) {
      return new AddCommand(arg1, arg2);
    } else if (commandType === commandTypes.FIN) {
      return new FinishCommand();
    } else {
      throw UnknownCommandError;
    }
  },
};

module.exports = CommandController;

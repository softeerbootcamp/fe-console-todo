const { Console } = require("./Utils");
const CommandController = require("./CommandController");
const OutputView = require("./OutputView");

const InputView = {
  getUserInputRecursive(prompt, callback) {
    Console.readLine(prompt, (input) => {
      try {
        callback(input);
      } catch (error) {
        OutputView.printError(error.message + "\n");
        this.getUserInputRecursive(prompt, callback);
      }
    });
  },

  readQuery(callback) {
    this.getUserInputRecursive("명령하세요 : ", (input) => {
      const splitedQuery = input.split("$");
      const command = CommandController.buildCommand(
        splitedQuery[0],
        splitedQuery[1],
        splitedQuery[2]
      );
      callback(command);
    });
  },
};

module.exports = InputView;

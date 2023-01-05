const { Console } = require("./Utils");

const OutputView = {
  printResult(result) {
    Console.print(result);
  },

  printError(e) {
    Console.print(e);
  },

  terminate() {
    Console.print("종료되었습니다\n");
    Console.close();
  },
};

module.exports = OutputView;

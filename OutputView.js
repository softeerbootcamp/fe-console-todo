const {Console} = require("@woowacourse/mission-utils");

const OutputView = {
    printResult(result) {
        Console.print(result);
    },
    printError(e) {
        Console.print(e);
    }
}

module.exports = OutputView;
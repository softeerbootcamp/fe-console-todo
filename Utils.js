const readline = require('node:readline');
const { resultCodes } = require('./Constants');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findTodoIdx(todos, idCond) {
  let foundIdx;
  todos.forEach(({ id }, idx) => {
    if (id === idCond) {
      foundIdx = idx;
    }
  });
  return foundIdx;
}

const Console = Object.freeze({
  readLine(prompt, callback) {
    rl.question(prompt, callback);
  },

  print(message) {
    console.log(message);
  },

  close() {
    rl.close();
  }
});

function getFinishResult() {
  return {
    code: resultCodes.FIN
  };
}

function isFinishResult(result) {
  return (result.code === resultCodes.FIN);
}

module.exports = {
  findTodoIdx,
  Console,
  getFinishResult,
  isFinishResult
};

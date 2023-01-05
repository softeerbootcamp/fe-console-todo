const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function readCommand(msg, callback) {
  rl.question(msg, callback);
}
function quit() {
  rl.close();
}

module.exports = { readCommand, quit };

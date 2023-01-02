const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let type = [];

const input = () => {
  console.log('명령하세요 : ');

  rl.on('line', (line) => {
    type = line.split('$').map((str) => str);
    rl.close();
  });

  return type;
};

const output = (text) => {
  rl.on('close', () => {
    console.log(text);
    process.exit();
  });
};

module.exports = { input, output };
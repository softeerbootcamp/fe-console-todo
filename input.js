const readline = require('readline');

// Todo : 입력 예외 처리 추가 예정

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

const input = async () => {
  let query = '';

  try {
    query = await prompt('명령 하세요 : ');
    if (query === '0') rl.close();
  } catch (e) {
    console.error(e);
  }

  query = query.split('$').map((str) => str);
  rl.on('close', () => process.exit(0));

  return query;
};

// const validateQuery = () => {

// };

module.exports = input;

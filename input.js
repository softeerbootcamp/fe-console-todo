const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
const input = async () => {
  let query = '';

  try {
    query = await prompt('명령 하세요 : ');
    rl.close();
  } catch (e) {
    console.error(e);
  }

  query = query.split('$').map((str) => str);

  return query;
};

module.exports = input;

const todos = require('./todos');
const input = require('./input');
const Todo = require('./Todo');

const TodoList = new Todo(todos);

const playTodo = async () => {
  console.log('종료를 원하시면 0을 입력하세요!');

  while (true) {
    const query = await input();
    const [command, type, tags] = [...query];

    if (command === 'show') {
      type === 'all' ? TodoList.printAll() : TodoList.printType(type);
    } else if (command === 'add') {
      TodoList.add(type, tags);
    } else if (command === 'delete') {
      TodoList.remove(type);
    } else if (command === 'update') {
      TodoList.update(type, tags);
    }
  }
};

playTodo();

const todos = require('./todos');
const input = require('./input');
const Todo = require('./Todo');

const TodoList = new Todo(todos);

const playTodo = async () => {
  console.log('종료를 원하시면 0을 입력하세요!');

  while (true) {
    const query = await input();
    const [command, typeOrID, tagOrStatus] = [...query];

    if (command === 'show') {
      typeOrID === 'all' ? TodoList.printAll() : TodoList.printType(typeOrID);
    } else if (command === 'add') {
      TodoList.add(typeOrID, tagOrStatus);
    } else if (command === 'delete') {
      TodoList.remove(typeOrID);
    } else if (command === 'update') {
      TodoList.update(typeOrID, tagOrStatus);
    }
  }
};

const TodoList = new Todo(todos);
playTodo();
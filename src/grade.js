const Todo = require('./Todo');
const todos = require('./todos');
const input = require('./input');

const startTodo = async () => {
  console.log('종료를 원하시면 0을 입력하세요.\n');

  while (true) {
    const query = await input();
    if (!query) continue;

    const [command, typeOrId, tagOrStatus] = [...query];

    if (command === 'show') typeOrId === 'all' ? TodoList.printAll() : TodoList.printType(typeOrId);
    else if (command === 'add') TodoList.add(typeOrId, tagOrStatus);
    else if (command === 'delete') TodoList.remove(typeOrId);
    else TodoList.update(typeOrId, tagOrStatus);
  }
};

const TodoList = new Todo(todos);
startTodo();

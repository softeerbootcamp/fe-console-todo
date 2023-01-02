const todos = require('./todos');
const { input, output } = require('./input');

const divideStatus = () => {
  let todo = todos.filter((res) => res.status === 'todo'),
    doing = todos.filter((res) => res.status === 'doing'),
    done = todos.filter((res) => res.status === 'done');

  return { todo, doing, done };
};

const showTodo = (type) => {
  const { todo, doing, done } = divideStatus();

  if (type === 'all') {
    let text = `현재상태 :  todo: ${todo.length}개, doing: ${doing.length}, done: ${done.length}`;
    console.log(text);
  } else {
    type === 'todo' && (type = todo);
    type === 'doing' && (type = doing);
    type === 'done' && (type = done);

    let info = [];

    type.map((res) => {
      let txt = '';
      txt += res.name;
      txt += ' , ';
      txt += res.id;
      info.push(txt);
    });

    let text = `${type[0].status}리스트 :  총${type.length}건 :` + info.map((data) => ` ' ${data} ' `);
    
    console.log(text);
  }
};

const addTodo = () => {};
const deleteTodo = () => {};
const updateTodo = () => {};

showTodo('todo');
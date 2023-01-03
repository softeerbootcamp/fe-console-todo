const todos = require('./todos.js');
const arrCount = require('./arrCount.js');

function add(name,tags){
    var timestamp = new Date().getUTCMilliseconds();
    id= (timestamp+Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000);
    todos.push({
        'name':name,
        'tags':tags,
        'status':'todo',
        'id': id
    });
    console.log(name+` 1개가 추가됐습니다. (id: ${id})`);
    console.log(`현재상태: todo: ${arrCount(todos, 'todo', 'status')}, doing: ${arrCount(todos, 'doing', 'status')}, done: ${arrCount(todos, 'done', 'status')}`);
}

module.exports= add;
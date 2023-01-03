const todos = require('./todos.js');
const arrCount = require('./arrCount');

function remove(arr,id){
    arr.map(item => {
        if (item['id'] == id) {
            console.log(`${item['name']} ${item['status']}가 목록에서 삭제됐습니다.`);
            var index=todos.findIndex(i=>item['id']==id);
            todos.splice(index, 1);
            console.log(`현재상태: todo: ${arrCount(todos, 'todo', 'status')}, doing: ${arrCount(todos, 'doing', 'status')}, done: ${arrCount(todos, 'done', 'status')}`);
        }
      });
}

module.exports=remove;
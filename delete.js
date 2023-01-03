const todos = require('./todos.js');
const show = require('./show.js');

function remove(arr,id){
    arr.map(item => {
        if (item['id'] == id) {
            console.log(`${item['name']} ${item['status']}가 목록에서 삭제됐습니다.`);
            var index=todos.findIndex(i=>item['id']==id);
            todos.splice(index, 1);
            show('all');
            }
      });
}

module.exports=remove;
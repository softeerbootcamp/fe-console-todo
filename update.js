const arrCount=require('./arrCount.js');
const show = require('./show.js');
const todos=require('./todos.js')

function update(arr,id, status){
    arr.map(item => {
        if (item['id'] == id) {
            item['status']=status;
            console.log(`${item['name']}가 ${status}으로 상태가 변경됐습니다. `);
            show('all');
            }
      });
}
module.exports= update;
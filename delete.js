const todos = require('./todos.js');
const show = require('./show.js');

function remove(arr,id){
    var check=0;
    arr.map(item => {
        if (item['id'] == id) {
            console.log(`${item['name']} ${item['status']}가 목록에서 삭제됐습니다.`);
            var index=todos.findIndex(i=>item['id']==id);
            todos.splice(index, 1);
            show('all');
            check++;
            }
        });
    if (check==0){
        console.log('일치하는 id가 없습니다.')
    }
}

module.exports=remove;
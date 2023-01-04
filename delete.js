const todos = require('./todos.js');
const show = require('./show.js');

function remove(arr,id){
    let check=0;
    
    arr.filter(item=>item['id'] == id)
    .map(item=>{
        console.log(`${item['name']} ${item['status']}가 목록에서 삭제됐습니다.`);
        let index=todos.findIndex(i=>item['id']==id);
        todos.splice(index, 1);
        show('all');
        check++;
    });
    if (check==0){
        console.log('일치하는 id가 없습니다.')
    }
}

module.exports=remove;
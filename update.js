const show = require('./show.js');

function update(arr,id, status){
    var check=0;
    const condition=['done','doing', 'todo']
    arr.map(item => {
        if (item['id'] == id) {
            check++;
            if(!(condition.includes(status))){
                console.log('일치하는 status가 없습니다.');
                return false;
            }
            item['status']=status;
            console.log(`${item['name']}가 ${status}으로 상태가 변경됐습니다. `);
            show('all');
            } });
    if (check==0){console.log('일치하는 id가 없습니다.');}
}
module.exports= update;
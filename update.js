const show = require('./show.js');

function update(arr,id, status){
    var check=0;
    arr.map(item => {
        if (item['id'] == id) {
            check++;
            item['status']=status;
            if(item['status']!='doing' || item['status']=='done' || item['status']!='doing'){
                console.log('일치하는 status가 없습니다.');
                return false;
            }
            console.log(`${item['name']}가 ${status}으로 상태가 변경됐습니다. `);
            show('all');
            } });
    if (check==0){console.log('일치하는 id가 없습니다.');}
}
module.exports= update;
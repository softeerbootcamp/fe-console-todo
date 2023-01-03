const arrCount=require('./arrCount.js');
const todos=require('./todos.js');

function show(word){
    if (word=='all'){
        console.log(`현재상태: todo: ${arrCount(todos, 'todo', 'status')}, doing: ${arrCount(todos, 'doing', 'status')}, done: ${arrCount(todos, 'done', 'status')}`);
    }
    else{
        var num =arrCount(todos, word, 'status');
        if (num==0){console.log(`${word}리스트: 총 ${num}건 `);}
        else{process.stdout.write(`${word}리스트: 총 ${num}건 : `);}
        
        todos.map(item => {
            if (item['status'] === word) {
                if (num==1){
                    console.log(` '${item['name']}, ${item['id']}번' `);
                }
                else{
                    process.stdout.write(` '${item['name']}, ${item['id']}번' ,`);
                    num--;
                }
            }
            });
    }
}

module.exports=show;
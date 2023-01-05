const arrCount=require('./arrCount.js');
const todos=require('./todos.js');

function show(word){
    if (word=='all'){
        console.log(`현재상태: todo: ${arrCount(todos, 'todo', 'status')}, doing: ${arrCount(todos, 'doing', 'status')}, done: ${arrCount(todos, 'done', 'status')}`);
    }
    else{
        let num =arrCount(todos, word, 'status');
        num==0?process.stdout.write(`${word}리스트: 총 ${num}건 `):process.stdout.write(`${word}리스트: 총 ${num}건 : `)
        
        let categoryList= todos.filter(item=>item['status'] === word)
        .map(item => {return `'${item['name']}, ${item['id']}번'`;});
        console.log(`${categoryList.join(', ')}`);
    }
}

module.exports=show;
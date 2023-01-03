let todos =  [ 
{
	'name' : '자바스크립트 공부하기', 
	'tags' : ['programming', 'javascript'],
	'status' : 'todo',
	'id' : 1
},
{
	'name' : ' 그림 그리기', 
	'tags' : ['picture', 'favorite'],
	'status' : 'doing',
	'id' : 2
}
]

function show_input(input){
    const todo = todos.filter( tmp => tmp.status === 'todo');
    const doing = todos.filter( tmp => tmp.status === 'doing');
    const done = todos.filter( tmp => tmp.status === 'done');
    if(input[1]==='all'){
        process.stdout.write("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
        return ;
    }

    if(input[1]==='todo' && todo.length){
        process.stdout.write("todo리스트 : 총" + todo.length + "건 : ");
        for(let i = 0; i < todo.length ; i++){
            process.stdout.write("'" + todo[i].name + ", " + todo[i].id + "번'");
            if(i !== todo.length - 1) console.log(", ");
        }
    }

    if(input[1]==='doing' && doing.length){
        process.stdout.write("doing리스트 : 총" + doing.length + "건 : ");
        for(let i = 0; i < doing.length ; i++){
            process.stdout.write("'" + doing[i].name+ ", " + doing[i].id + "번'");
            if(i !== doing.length - 1) console.log(", ");
        }
    }

    if(input[1]==='done' && done.length){
        process.stdout.write("done리스트 : 총" + done.length+"건 : ");
        for(let i = 0; i < done.length ; i++){
            process.stdout.write("'" + done[i].name + ", ",done[i].id + "번'");
            if(i !== done.length - 1) console.log(", ");
        }
    }

}

function add_input(input){
    
}
function delete_input(input){
    const del_elem = todos.filter( tmp => tmp.id == parseInt(input[1]));
    todos = todos.filter( tmp => tmp.id != parseInt(input[1]));

    process.stdout.write(del_elem[0].name + " " + del_elem[0].status + "가 목록에서 삭제되었습니다\n");
}

function update_input(input){
    
    let update_elem = todos.filter( tmp => tmp.id == parseInt(input[1]));
    todos = todos.filter( tmp => tmp.id != parseInt(input[1]));

    update_elem[0].status = input[2];
    todos.push(update_elem[0])

    process.stdout.write(update_elem[0].name + " " + update_elem[0].status + "으로 상태가 변경됐습니다.\n");

    const todo = todos.filter( tmp => tmp.status == 'todo');
    const doing = todos.filter( tmp => tmp.status == 'doing');
    const done = todos.filter( tmp => tmp.status == 'done');

    process.stdout.write("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
    return ;
    
}
let id = todos.length+1;

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    let input = line.split('$');
    if(input[0] === 'show'){
        show_input(input);
    }
    if(input[0] === 'add'){
        add_input(input);

    }
    if(input[0] === 'delete'){
        delete_input(input);

    }
    if(input[0] === 'update'){
        update_input(input);

    }
}).on("close", function() {
    process.exit();
});


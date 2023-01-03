let todos =  [ {
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
},
{
	'name' : ' ios 공부하기', 
	'tags' : ['ios', 'favorite'],
	'status' : 'todo',
	'id' : 3
},
{
	'name' : ' 컴퓨터 수리하기', 
	'tags' : ['angry', 'computer'],
	'status' : 'done',
	'id' : 4
},
{
	'name' : ' 만화 보기', 
	'tags' : ['cartoon'],
	'status' : 'todo',
	'id' : 5
}
]

const [TODO, DOING, DONE] = ['todo', 'doing', 'done']

function show_status(){
    const todo = todos.filter( tmp => tmp.status === TODO);
    const doing = todos.filter( tmp => tmp.status === DOING);
    const done = todos.filter( tmp => tmp.status === DONE);

    console.log("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
}

function show_lst(status, lst){
    if(!lst.length){
        console.log("해당 리스트가 없습니다.")
        return;
    }

    process.stdout.write(status+"리스트 : 총" + lst.length + "건 : ");
    for(let i = 0; i < lst.length ; i++){
        process.stdout.write("'" + lst[i].name + ", " + lst[i].id + "번'");
        if(i !== lst.length - 1) process.stdout.write(", ");
    }
    console.log();
}

function show_input(input){
    const todo = todos.filter( tmp => tmp.status === TODO);
    const doing = todos.filter( tmp => tmp.status === DOING);
    const done = todos.filter( tmp => tmp.status === DONE);
    if(input[1]==='all'){
        console.log("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
        return;
    }

    if(input[1]=== TODO){
        show_lst(input[1], todo);
        return;
    }

    if(input[1]===DOING){
        show_lst(input[1], doing);
        return;
    }

    if(input[1]===DONE){
        show_lst(input[1], done);
        return;
    }

    console.log('잘못된 입력입니다.');
}

function add_input(input){
    let ele={};
    ele.id = id++;
    ele.name = input[1];
    ele.status = TODO;
    let tag = input[2].slice(1 , -1).split(',').map(e => e.slice(1,-1));
    ele.tags = tag;
    todos.push(ele);
    console.log("공부하기 1개가 추가되었습니다. (id : " , ele.id +")");
    show_status()
}
function delete_input(input){
    const del_elem = todos.filter( tmp => tmp.id === Number(input[1]));
    todos = todos.filter( tmp => tmp.id !== Number(input[1]));

    if(!Number(input[1])){
        console.log("잘못된 입력입니다.");
        return;
    }

    if(!del_elem.length){
        console.log("해당하는 id가 없습니다.")
        return;
    }
    process.stdout.write(del_elem[0].name + " " + del_elem[0].status + "가 목록에서 삭제되었습니다\n");

    show_status()
}

function update_input(input){
    let update_elem = todos.filter( tmp => tmp.id === Number(input[1]));
    todos = todos.filter( tmp => tmp.id !== Number(input[1]));

    if(!Number(input[1]) || !(input[2] === TODO || input[2] === DOING || input[2] === DONE)){
        console.log("잘못된 입력입니다.");
        return;
    }

    if(!update_elem.length){
        console.log("해당하는 id가 없습니다.")
        return;
    }

    

    update_elem[0].status = input[2];
    todos.push(update_elem[0])

    process.stdout.write(update_elem[0].name + " " + update_elem[0].status + "으로 상태가 변경됐습니다.\n");

    show_status()
}
let id = todos.length+1;

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
process.stdout.write("명령하세요 : ")
rl.on("line", function(line) {
    let input = line.split('$');

    if(input[0] === 'close' && input.length ==1)
        rl.close()
    if(input[0] === 'show'&& input.length ==2)
        show_input(input);
    else if(input[0] === 'add'&& input.length ==3)
        add_input(input);
    else if(input[0] === 'delete'&& input.length ==2)
        delete_input(input);
    else if(input[0] === 'update'&& input.length ==3)
        update_input(input);
    else if(line)
        console.log("잘못된 입력입니다.");
    process.stdout.write("\n명령하세요 : ")

}).on("close", function() {
    process.exit();
});




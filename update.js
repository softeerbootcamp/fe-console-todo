let { todos, TODO, DOING, DONE } = require("./todos");

function update_input(input){
    if(!Number(input[1]) || !(input[2] == TODO || input[2] == DOING || input[2] == DONE)){
        console.log("잘못된 입력입니다.");
        return;
    }

    let findValue = todos.findIndex((tmp) => tmp.id === Number(input[1]))
    if(findValue === -1){
        console.log("해당하는 id가 없습니다.")
        return;
    }

    todos[findValue] = {...todos[findValue], status: input[2]}
    process.stdout.write(todos[findValue].name + " " + todos[findValue].status + "으로 상태가 변경됐습니다.\n");

    require('./utils').show_status;
}

exports.update = update_input;
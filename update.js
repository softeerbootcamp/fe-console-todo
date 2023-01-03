let { todos, TODO, DOING, DONE } = require("./todos");

function update_input(input){
    let update_elem = require("./delete").del_el(input);

    if(!Number(input[1]) || !(input[2] == TODO || input[2] == DOING || input[2] == DONE)){
        console.log("잘못된 입력입니다.");
        return;
    }

    if(!update_elem.length){
        console.log("해당하는 id가 없습니다.")
        return;
    }

    update_elem[0].status = input[2];
    todos.push(update_elem[0]);

    process.stdout.write(update_elem[0].name + " " + update_elem[0].status + "으로 상태가 변경됐습니다.\n");

    require('./utils').show_status;
}

exports.update = update_input;
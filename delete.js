let { todo_arr } = require("./todos");

function del_el(input){
    let findValue = todo_arr.findIndex((tmp) => tmp.id === Number(input[1]))
    let del_elem = todo_arr.filter(tmp => tmp.id === Number(input[1]));

    todo_arr.splice(findValue,1);
    return del_elem;
}

function delete_input(input){
    if(!Number(input[1])){
        console.log("잘못된 입력입니다.");
        return;
    }

    let del_elem = del_el(input);

    if(!del_elem.length){
        console.log("해당하는 id가 없습니다.")
        return;
    }

    process.stdout.write(del_elem[0].name + " " + del_elem[0].status + "가 목록에서 삭제되었습니다\n");

    require('./utils').show_status;
}

module.exports.delete = delete_input;
module.exports.del_el = del_el;
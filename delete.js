const todos = require("./todos")["todos"];

function idelete(idnum){
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === idnum){
            console.log(`${todos[i].name} ${todos[i].status}가 목록에서 삭제됐습니다`);
            todos.splice(i, 1);

            return true;
        }
    }

    console.log("해당 ID가 없습니다.")

    return false;
}

exports.idelete = idelete;
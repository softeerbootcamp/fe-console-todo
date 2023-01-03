const todos = require("./todos")["todos"];

function update(id, changedStatus) {
    if(["todo", "doing", "done"].find(element => element === changedStatus) === undefined) {
        console.log("올바른 status를 입력해주세요.")

        return false;
    }

    for(let i=0;i<todos.length;i++) {
        if(todos[i].id === id) {
            todos[i].status = changedStatus;
            
            return true;
        }
    }

    console.log(`해당 id : ${id}가 없습니다.`)

    return false
}

exports.update = update;
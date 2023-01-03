const todos = require("./todos")["todos"];

function update(id, changedStatus) {
    for(let i=0;i<todos.length;i++) {
        if(todos[i].id == id) {
            todos[i].status = changedStatus;
            
            break;
        }
    }
}

exports.update = update;
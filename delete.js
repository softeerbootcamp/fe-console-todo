const todos = require("./todos")["todos"];
const {MESSAGES, SHOW_STATUS, ERROR_MESSAGE} = require("./constants");

function idelete(idnum){
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === Number(idnum)){
            console.log(MESSAGES.DELETE_MESSAGE(todos[i].name, todos[i].status));
            todos.splice(i, 1);

            return;
        }
    }

    console.log(ERROR_MESSAGE.ERROR_ID_MISSING(idnum));

    return;
}

module.exports = { idelete };
const todos = require("./todos")["todos"];
const {MESSAGES, SHOW_STATUS, ERROR_MESSAGE} = require("./constants");

function update(id, changedStatus) {
    if(["todo", "doing", "done"].find(element => element === changedStatus) === undefined) {
        console.log(MESSAGES.ERROR_STATUS("STATUS"));

        return false;
    }

    for(let i=0;i<todos.length;i++) {
        if(todos[i].id === id) {
            todos[i].status = changedStatus;
            console.log(MESSAGES.UPDATE_MESSAGE(todos[i].name,changedStatus));
            return true;
        }
    }

    console.log(ERROR_MESSAGE.ERROR_ID_MISSING(id));

    return false;
}

module.exports = { update };
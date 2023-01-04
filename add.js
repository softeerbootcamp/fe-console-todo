const todos = require("./todos")["todos"];
const {MESSAGES, SHOW_STATUS, ERROR_MESSAGE} = require("./constants");

function validateID() {
    let now = new Date();
    let nowToSeconds = now.getTime() % 1000000;

    for(let i=0;i<todos.length;i++) {
        if(todos[i].id === nowToSeconds) {
            nowToSeconds = validateID();
            
            break;
        }
    }

    return nowToSeconds
}

function addList(todoName, todoTags){
    if(todoTags[0] != '[' || todoTags[todoTags.length - 1] != ']'){
        console.log(ERROR_MESSAGE.ERROR_COMMAND);
        return;
    }
    else{
        todoTags = todoTags.slice(1,-1);
        let newtags = todoTags.split(',');
        for(let i = 0; i < newtags.length; i++){
            newtags[i] = newtags[i].split('"')[1];
        }

        todos.push({
            'name':todoName,
            'tags':newtags,
            'status':"todo",
            "id": validateID()
        });
    
        console.log(MESSAGES.ADD_MESSAGE(todoName,todos[todos.length - 1].id));
    }
}

module.exports = { addList };
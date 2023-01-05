const todos = require('./todos')["todos"];

function validateID() {
    let now = new Date();
    let nowToSeconds = now.getTime() % 1000000;

    for(let i=0;i<todos.length;i++) {
        if(todos[i].id == nowToSeconds) {
            nowToSeconds = validateID();
            
            break;
        }
    }

    return nowToSeconds
}

function addlist(todoName, todoTags){
    if(todoTags[0] != '[' || todoTags[todoTags.length - 1] != ']'){
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
    
        console.log(`${todoName} 1개가 추가됐습니다. (id: ${todos[todos.length - 1].id})`);
    }
}

exports.addlist = addlist;
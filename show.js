const todos = require("./todos")["todos"];

function statusIndex(givenList, status) {
    process.stdout.write(`${status}리스트 : 총${givenList.length}건`);
        
    if(givenList.length) {
        process.stdout.write(" : ");

        process.stdout.write(givenList.join(" , "))
    }

    console.log('');
}

function show(status) {
    let todoList = [];
    let doingList = [];
    let doneList = [];

    if(["all", "todo", "doing", "done"].find(element => element === status) === undefined) {
        console.log("올바른 status를 입력해주세요.");

        return;
    }

    for(let i=0;i<todos.length;i++) {
        if(todos[i].status === "todo") {
            todoList.push(`'${todos[i].name}, ${todos[i].id}번'`)
        }
        else if(todos[i].status === "doing") {
            doingList.push(`'${todos[i].name}, ${todos[i].id}번'`)
        }
        else if(todos[i].status === "done") {
            doneList.push(`'${todos[i].name}, ${todos[i].id}번'`)
        }
    }

    if(status === "all") {
        console.log(`현재 상태 : todo : ${todoList.length}개, doing : ${doingList.length}개, done : ${doneList.length}개`);
    }
    else if(status === "todo") {
        statusIndex(todoList, "todo");
    }
    else if(status === "doing") {
        statusIndex(doingList, "doing");
    }
    else if(status === "done") {
        statusIndex(doneList, "done");
    }
}

exports.show = show;
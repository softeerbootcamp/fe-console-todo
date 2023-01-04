const todos = require("./todos")["todos"];
const {MESSAGES, SHOW_STATUS, ERROR_MESSAGE} = require("./constants");

function statusIndex(givenList, status) {
    process.stdout.write(`${status}리스트 : 총${givenList.length}건`);
        
    if(givenList.length) {
        process.stdout.write(" : ");

        process.stdout.write(givenList.join(" , "))
    }

    console.log("");
}

function show(status) {
    let dict = {};

    dict["todo"] = [];
    dict["doing"] = [];
    dict["done"] = [];

    if(["all", "todo", "doing", "done"].find(element => element === status) === undefined) {
        console.log(ERROR_MESSAGE.ERROR_STATUS);

        return;
    }

    for(let i=0;i<todos.length;i++) {
        dict[todos[i].status].push(`'${todos[i].name}, ${todos[i].id}번'`)
    }

    if(status === "all") {
        console.log(`현재 상태 : todo : ${dict["todo"].length}개, doing : ${dict["doing"].length}개, done : ${dict["done"].length}개`);
    }
    else {
        statusIndex(dict[status], status)
    }
}

module.exports = { show };
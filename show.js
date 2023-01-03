let { todos,TODO,DOING,DONE } = require("./todos");

function show_input(input){
    const utils = require('./utils');

    const todo = todos.filter( tmp => tmp.status === TODO);
    const doing = todos.filter( tmp => tmp.status === DOING);
    const done = todos.filter( tmp => tmp.status === DONE);
    if(input[1]==='all'){
        console.log("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
        return;
    }

    if(input[1]=== TODO){
        utils.show_lst(input[1], todo);
        return;
    }

    if(input[1]=== DOING){
        utils.show_lst(input[1], doing);
        return;
    }

    if(input[1]=== DONE){
        utils.show_lst(input[1], done);
        return;
    }

    console.log('잘못된 입력입니다.');
}

exports.show = show_input;
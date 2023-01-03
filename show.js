function show_input(input){
    const todos = require('./todos');
    const utils = require('./utils');

    const todo = todos.todo_arr.filter( tmp => tmp.status === todos.TODO);
    const doing = todos.todo_arr.filter( tmp => tmp.status === todos.DOING);
    const done = todos.todo_arr.filter( tmp => tmp.status === todos.DONE);
    if(input[1]==='all'){
        console.log("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
        return;
    }

    if(input[1]=== todos.TODO){
        utils.show_lst(input[1], todo);
        return;
    }

    if(input[1]=== todos.DOING){
        utils.show_lst(input[1], doing);
        return;
    }

    if(input[1]=== todos.DONE){
        utils.show_lst(input[1], done);
        return;
    }

    console.log('잘못된 입력입니다.');
}

exports.show = show_input;
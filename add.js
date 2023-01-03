let { todos, TODO} = require("./todos");
let id = todos.length+1;

function add_input(input){

    let ele={};
    ele.id = id++;
    ele.name = input[1];
    ele.status = TODO;
    let tag = input[2].slice(1 , -1).split(',').map(e => e.slice(1,-1));
    ele.tags = tag;
    todos.push(ele);
    console.log("공부하기 1개가 추가되었습니다. (id : " , ele.id +")");
    require('./utils').show_status;
}

module.exports.add = add_input;

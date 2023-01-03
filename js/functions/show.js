var data = require('../data')
function all() {
    for(i in data.todos){
        console.log(data.todos[i])
    }
}
function statusName(todos, statusName){

}


module.exports.all = all;
module.exports.statusName = statusName;
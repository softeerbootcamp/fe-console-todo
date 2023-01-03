const todos = require('./todos.js');
const show = require('./show.js');

function add(name,tags){
    var timestamp = new Date().getUTCMilliseconds();

    id= (timestamp+Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000);
    todos.push({
        'name':name,
        'tags':tags,
        'status':'todo',
        'id': id
    });
    console.log(name+` 1개가 추가됐습니다. (id: ${id})`);
    show('all')
}

module.exports= add;
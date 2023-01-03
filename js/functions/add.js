var data = require('../data')
function item(itemName, tagNames) {
    data.todos.push({
        'name': itemName,
        'tags': tagNames,
        'status': 'todo',
        'id': generateIdNumber()
    })
}


const generateIdNumber = () => {
    let id = 0;
    if (data.todos.length > 0) {
        id = getLastIdNnumber() + 1;
    }
    return id;
}
const getLastIdNnumber = () => {
    return data.todos[data.todos.length - 1]['id']
}
module.exports.item = item;
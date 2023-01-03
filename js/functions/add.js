var data = require('../data')
var output = require('../io/output')

function item(itemName, tagNames) {
    const id = addItem(itemName, tagNames)
    output.showAddResult(itemName,id)
    output.showCurrentStatus()

}


const addItem = (itemName, tagNames) => {
    const id = generateIdNumber()
    data.todos.push({
        'name': itemName,
        'tags': tagNames,
        'status': 'todo',
        'id': id
    })
    data.currentStatus['todo'] += 1
    return id
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
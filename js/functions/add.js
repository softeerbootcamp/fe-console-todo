const data = require('../data')
const output = require('../io/output')
const io = require('../io/ioException')

function item(itemName, tagNames) {
    io.emptyItemNameCheck(itemName)
    //io.tagNamesCheck(tagNames)
    const tagList = generateTagNames(tagNames)
    const id = addItem(itemName, tagList)
    output.showAddResult(itemName, id)
    output.showCurrentStatus()
}

const addItem = (itemName, tagList) => {
    const id = generateIdNumber()
    data.todos.push({
        'name': itemName,
        'tags': tagList,
        'status': 'todo',
        'id': id
    })
    data.currentStatus['todo'] += 1
    return id
}

const generateTagNames = (tagNames) => {
    var result = tagNames.substring(1, tagNames.length - 1).split(", ")
    for (i in result) {
        result[i] = result[i].substring(1, result[i].length - 1)
    }
    //console.log(result)
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

// generateTagNames()
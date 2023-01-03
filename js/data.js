 const todos =  [ 
    {
        'name' : '자바스크립트 공부하기', 
        'tags' : ['programming', 'javascript'],
        'status' : 'todo',
        'id' : 121
    },
                    {
        'name' : ' 그림 그리기', 
        'tags' : ['picture', 'favorite'],
        'status' : 'doing',
        'id' : 312323
    }
]

const currentStatus = {
    todo: 0, doing: 0, done: 0
}

for (i in todos) {
    switch (todos[i].status) {
        case 'todo':
            currentStatus.todo += 1
            break
        case 'doing':
            currentStatus.doing += 1
            break
        case 'done':
            currentStatus.done += 1
            break
        default:
            console.log("ERROR: STATUS IN TODOS WRONG")
    }
}

module.exports.todos = todos
module.exports.currentStatus = currentStatus
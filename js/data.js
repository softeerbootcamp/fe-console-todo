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

function binarySearch(target){
    let left = 0;
    let right = todos.length - 1;
    let mid = 0;

    while (left <= right) {
        // 가운데 인덱스
        mid = Math.floor((left + right) / 2);

        if (todos[mid]['id'] === target) {
            return mid;
        }

        // 대소 비교로 범위 지정
        if (todos[mid]['id']  > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
module.exports.todos = todos
module.exports.currentStatus = currentStatus
module.exports.binarySearch = binarySearch
var data = require('../data')
function item(idNumber) {
    // const itemIndex = search(idNumber);
    const itemIndex = binarySearch(idNumber, 0, data.todos.length - 1);
    //isValidIdNumber(itemIndex);
    data.todos.splice(itemIndex, 1);
}
// const search = (target) => {
//     for (i in data.todos) {
//         if (data.todos[i]['id'] == target) {
//             return i
//         }
//     }
//     return -1;
// }
const binarySearch = (target, left, right) => {
    let mid = 0;

    while (left <= right) {
        // 가운데 인덱스
        mid = Math.floor((left + right) / 2);

        if (data.todos[mid]['id'] === target) {
            return mid;
        }

        // 대소 비교로 범위 지정
        if (data.todos[mid]['id']  > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
module.exports.item = item;
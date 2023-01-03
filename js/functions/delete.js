var data = require('../data')
var output = require('../io/output')
function item(idNumber) {
    // const itemIndex = binarySearch(idNumber, 0, data.todos.length - 1);
    const itemIndex = data.binarySearch(idNumber)
    const itemName = data.todos[itemIndex].id
    const statusName = data.todos[itemIndex].status
    output.showDeleteResult(itemName,statusName)
    data.currentStatus[statusName] -= 1
    output.showCurrentStatus()
    data.todos.splice(itemIndex, 1);
    //공부하기 todo가 목록에서 삭제됐습니다
}



// const binarySearch = (target, left, right) => {
//     let mid = 0;

//     while (left <= right) {
//         // 가운데 인덱스
//         mid = Math.floor((left + right) / 2);

//         if (data.todos[mid]['id'] === target) {
//             return mid;
//         }

//         // 대소 비교로 범위 지정
//         if (data.todos[mid]['id']  > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return -1;
// }
module.exports.item = item;
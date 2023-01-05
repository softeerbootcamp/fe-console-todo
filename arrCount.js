//  리스트 개수 카운트
function arrCount(arrParam, str, property) {
    let count = 0;
    arrParam.map(item => {
      if (item[property] === str) count++;
    });
    return count;
  }

  module.exports=arrCount;
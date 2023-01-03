//  리스트 개수 카운트
function arrCount(arrParam, str, property) {
    var count = 0;
    arrParam.map(item => {
      if (item[property] === str) count++;
    });
    return count;
  }

  module.exports=arrCount;
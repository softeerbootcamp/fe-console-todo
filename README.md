# fe-console-todo
# 1/2 콘솔TODO

---

# 1. Terms

배열 (const todos): 전체 데이터 (기존 데이터는 깡배열. Item배열로 바꾸는 작업 필요?)

class Item: todos의 객체 타입

---

# 2. 기능 명세

### show

$all
currentStatus의 todo, doing, done 수 출력
ex) 현재상태: todo: 3개, doing: 2개, done: 4개

$STATUS_NAME
배열의 총 entity 개수, 배열의 STATUS_NAME에 해당하는 { name, id+’번’ }들 출력
ex) 총2건 : ' 자바스크립트 공부하기, 1822번' , 'iOS공부하기, 9933번'

### add

$ITEM_NAME$[TAG_NAMES]$ID_NUMBER
새로운 ITEM 객체 생성. 
객체 name이 ITEM_NAME & tags는 TAG_NAMES & status는 todo & id는 ID_NUMBER
$ITEM_NAME 추가되었습니다. (id: ID_NUMBER) 

### delete

$ID
ID에 해당되는 entity 제거 후, 어떠한 status가 제거되었는지 표시, show$all 출력
ex) 공부하기 todo가 목록에서 삭제되었습니다.\n 현재상태: todo: 3개, doing: 2개, done: 4개

### update

$ID$STATUS_NAME
{기존 status}가 {STATUS_NAME}으로 상태가 변경되었습니다 출력
ID에 해당하는 entity의 status를 STATUS_NAME으로로 변경,
show$all 출력

---

# 3. 구현 할것

- node 실행 후 입력 어떻게 받아야하지? → readline module
[https://velog.io/@leenzy/readline-모듈-사용하기](https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- *검색의 효율? → id가 AI식으로 증가.*
- 기존 todos 배열을 Item class의 배열로 어떻게 전환하지?
- 클래스의 효율성 & 클래스 활용법 대해 고민해보기

---

# 4. 구현 방법

dictionary 선언 → const currentStatus = { todo: 0, doing: 0, done: 0 }

프로그램 시작 시, todos 내부 요소의 status counting 필요.

todos 내부 객체 → class Item: name, tags, status, id


# 5. 예외 처리

- 잘못된 명령어일 경우
    - show, add, delete, update, all 이외에 명령어인 경우
- 3가지 status(todo, doing, done)이외에 명령어를 입력한 경우
- update또는 delete시에 todos 배열에 없는 id를 요청할 경우
- update시에 tag에 배열을 입력하지 않은 경우

[https://www.npmjs.com/package/array-tools](https://www.npmjs.com/package/array-tools)
배열 처리 패키지

[https://github.com/NaRae-tech/javascript-racingcar-precourse/tree/narae](https://github.com/NaRae-tech/javascript-racingcar-precourse/tree/narae)
예시 코드 레포
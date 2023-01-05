# FE-Console-Todo : 문경덕, 정태훈

<br>

# 파일
##### grade.js - node로 컴파일해서 실행될 파일
##### todos.js - 데이터 저장 공간
##### add.js - add 처리
##### delete.js - delete 처리
##### show.js - 출력 처리
##### update.js - update 처리

<br>

# 실행 예시
```bash
터미널 실행 : $node grade.js

1️⃣ show

명령하세요 ("exit" to fisnish) : show$all
현재 상태 : todo : 1개, doing : 1개, done : 0개

명령하세요 ("exit" to fisnish) : show$todo
todo리스트 : 총1건 : '자바스크립트 공부하기, 12123123번'

2️⃣ add

명령하세요 ("exit" to fisnish) : add$soccer$["sports", "hobby"]
soccer 1개가 추가됐습니다. (id: 411226)
현재 상태 : todo : 2개, doing : 1개, done : 0개

3️⃣ delete

명령하세요 ("exit" to fisnish) : delete$312323
그림 그리기 doing가 목록에서 삭제됐습니다
현재 상태 : todo : 2개, doing : 0개, done : 0개

4️⃣ update

명령하세요 ("exit" to fisnish) : update$12123123$doing
현재 상태 : todo : 1개, doing : 1개, done : 0개
```







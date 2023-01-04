# FE-CONSOLE-TODO
# 미션-콘솔TODO

## 1. Terms
**todos 배열** : todo list 데이터를 담는 전역적 변수

**currentStatus** : todo list 내 status별로 개수를 저장하는 dictionary.

## 2. 기능
### show

**all()**

현재 currentStatus 출력

**thisStatus(statusName)**

statusName에 해당하는 todos 배열의 요소의 {name, id} 모두 출력
### add

**item(itemName, tagNames)**

추가될 entity의 {name, id} 출력

tagNames 속성을 가진 itemName 이름의 새로운 entity를 todos 배열에 추가.

currentStatus 출력

### delete

**item(idNumber)**

삭제될 entity의 {id, status} 출력

idNumber의 id값을 가진 todos 배열의 요소 제거

currentStatus 출력

### update

**status(idNumber, statusName)**

update될 entity의 기존 status, 입력된 status 출력

idNumber의 id값을 가진 todos 배열의 요소의 status를 statusName으로 업데이트

currentStatus 출력

## 3. 구조

./js/todos.js: 메인 파일. 입력을 받아 기능을 수행

./js/data.js: default data와 currentStatus를 저장하며, 초기화

./js/functions: 입력값에 대한 기능을 수행

./js/io: 키보드 입출력 및 입력값에 대한 예외 처리 수행

## 4. 예외 처리 경우
ioException.js에 위치함
- emptyInputCheck: 아무 입력도 하지 않음
- inputListLengthCheck: 명령어 개수가 부족함
- statusCheck: 잘못된 status값 입력됨 (todo, doing, done 이외의 값)
- findIndex: 입력된 id number가 todos 배열에 없음
- emptyItemNameCheck: add시 이름이 빈 문자열임

## 5. 팀

- [@jaehyuncho](https://www.github.com/hyunrice98)
- [@tdmdgh](https://www.github.com/tdmdgh)

# FrontEnd-Console-TODO - 정장오, 장민지

### 프로젝트 개요

TODO 리스트로 해야 할 일 리스트를 조회 및 수정이 가능하며 진행 상황별 리스트 조회가 가능한 프로젝트

### 실행 방법

`npm start`

### 파일 목록

- **grade.js** - main 실행 파일
- **Todo.js** - Todo Class 파일
- **validate.js** - 예외처리 파일
- **input.js** - 입력 함수 파일

### 예외 처리 항목

- 첫 명령어가 `show, add, delete, update`로 시작하지 않을 경우 에러 메시지 출력
- Show Type이 `all, todo, doing, done`이 아닐 경우 에러 메시지 출력
- Update Status가 `todo, doing, done`이 아닐 경우 에러 메시지 출력
- Add Tags가 배열 형식이 아니거나 따옴표가 일치하지 않을 경우 에러 메시지 출력
- 각 명령어 사이가 `$`가 아닐 경우 에러 메시지 출력
- 삭제 또는 수정할 때 입력 ID가 존재하지 않을 경우 에러 메시지 출력
- 새로운 TODO를 생성할 때 기존 ID와 중복할 경우 새로운 ID 할당

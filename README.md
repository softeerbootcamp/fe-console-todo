# fe-console-todo

```
├── CommandController.js
├── Constants.js
├── InputView.js
├── OutputView.js
├── TodoErrors.js
├── Utils.js
├── commands
│   ├── Add.js
│   ├── Command.js
│   ├── Delete.js
│   ├── Finish.js
│   ├── Modules.js
│   ├── Show.js
│   └── Update.js
└── todos.js  <-- Entry Point
```

|파일명|설명|
|--|--|
|CommandController.js|사용자의 입력이 `$`기준으로 split 되어 들어오면 명령의 종류를 분석하여 각각의 상황에 맞는 `Command` subclass 객체를 생성하여 반환하는 것으로 라우팅을 구현|
|Constants.js|전체 파일에서 사용된 상수를 별도의 파일로 분리|
|InputView.js|사용자에게 입력받는 프롬프트를 구성하고, 입력을 처리하여 `CommandController`로 전달|
|OutputView.js|`Command.execute`의 결과로 받은 `result` 문자열이나 propagate 된 예외를 출력|
|TodoErrors.js|프로젝트에서 발생할 수 있는 `Error`를 별도의 파일로 분리|
|Utils.js|`node:readline`과 `console`을 래핑하는 `Console` 객체나 `todos`에서 원하는 `id`의 인덱스를 찾는 함수 등|
|Add.js|`Command`클래스의 subclass `AddCommand`를 구현|
|Command.js|각 명령에 따라 `CommandController`로부터 생성되는 객체들의 공용 인터페이스를 규정하고 있는 `Command` 클래스|
|Delete.js|`Command`클래스의 subclass `DeleteCommand`를 구현|
|Finish.js|`Command`클래스의 subclass `FinishCommand`를 구현|
|commands/index.js|`/commands`내에서 외부로 공개하고 싶은 모듈들을 한번에 불러올 수 있는 모듈|
|Show.js|`Command`클래스의 subclass `ShowCommand`를 구현|
|Update.js|`Command`클래스의 subclass `UpdateCommand`를 구현|
|todos.js|프로그램의 프론트에서 사용자 입력을 받기 시작하는 엔트리 포인트|

> 명령의 구조는 <명령어>\$<첫번째인자>\$<두번째인자> 입니다.

```
$ npm start

> fe-console-todo@1.0.0 start
> node todos.js

명령하세요 : show$all
현재상태 : todo: 1개, doing: 1개, done: 1개

명령하세요 : show$todo
todo리스트 : 총1건 : '자바스크립트 공부하기, 12123123번'

명령하세요 : add$study-javascript$["favorite"]
study-javascript 1개가 추가됐습니다. (id: 1672798133968)
현재상태 : todo: 2개, doing: 1개, done: 1개

명령하세요 : delete$1672798133968
study-javascript todo(이)가 목록에서 삭제됐습니다
현재상태 : todo: 1개, doing: 1개, done: 1개

명령하세요 : add$something$[""xx"]
두 번째 인자가 잘못되었습니다.

명령하세요 : add$something$["xx"]
something 1개가 추가됐습니다. (id: 1672798212984)
현재상태 : todo: 2개, doing: 1개, done: 1개

명령하세요 : update$1672798212984$doing
something doing(으)로 상태가 변경됐습니다
현재상태 : todo: 1개, doing: 2개, done: 1개

명령하세요 : fin
종료되었습니다
```
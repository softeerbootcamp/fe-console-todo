# fe-console-todo

InputView.js
- readQuery(callback)
    - param #1 callback
        - 구조화된 입력 객체 -> object

TodoService.js
    - object.getCommand() -> "show", "add", "delete", "update"
    - object.getName() -> "study-javascript"
    - object.getTags() -> [...]
    - 이용해서 DB를 관리하는 로직

OutputView.js

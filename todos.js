const InputView = require("./InputView");
const OutputView = require("./OutputView");

const todos =  [ 
    {
        'name' : '자바스크립트 공부하기', 
        'tags' : ['programming', 'javascript'],
        'status' : 'todo',
        'id' : 12123123
    },
    {
        'name' : ' 그림 그리기', 
        'tags' : ['picture', 'favorite'],
        'status' : 'doing',
        'id' : 312323
    },
    {
        'name' : '밥먹기', 
        'tags' : ['favorite'],
        'status' : 'done',
        'id' : 312324
    }
];

function start() {
    InputView.readQuery(command => {
        command.execute(todos, result => {
            OutputView.printResult(result);
        });
        start();
    });
}

start();
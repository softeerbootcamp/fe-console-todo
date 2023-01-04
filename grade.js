const { show } = require('./show');
const { update } = require("./update");
const { idelete } = require('./delete');
const { addList } = require("./add");

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function selectJob(job, firstParam, secondParam) {
    // delete
    if(job === 'delete') {
        idelete(firstParam);
    }
    // update
    else if(job === 'update') {
        update(firstParam, secondParam)
    }
    // add
    else if(job === 'add') {
        addList(firstParam, secondParam);
    }

    show("all");
}

reader.setPrompt('명령하세요: ("exit" to fisnish) ');

reader.prompt(); 

reader.on("line", (line) => {
    if(line === "exit"){
        reader.close();
    }

    // 사용자 input 파싱하여 배열 저장
    let inputWords = line.split('$');

    if(inputWords.length === 1) {
        console.log("잘못된 입력입니다. 올바르게 입력해주세요. ");
    }
    // show
    else if(inputWords[0]=== 'show' && inputWords.length === 2){
        show(inputWords[1]);
    }
    // delete & update & add
    else if(inputWords[0] === 'delete' || inputWords[0] === 'update' || inputWords[0] === 'add') {
        selectJob(inputWords[0], inputWords[1], inputWords[2]);
    }
    // except case
    else {
        console.log("잘못된 입력입니다. 올바르게 입력해주세요. ");
    }

    reader.prompt();
});

reader.on("close",function(){
    process.exit();
})

// 참고 부분
// readline의 question 함수를 통해 무한 반복하는 방법
/*
onst readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getInput() {
    reader.question("명령어를 입력하세요 : ", (line) => {
    
        if(line == 'exit') {
            reader.close();
    
            reader.on("close",function(){
                process.exit();
            })
        }
        else {
            console.log("출력 부분 : ", line)
            getInput();
        }
    })   
}

getInput();
*/
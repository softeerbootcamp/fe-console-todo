const showRes = require('./show');
const updateRes = require("./update");
const deleteRes = require('./delete');
const addRes = require("./add");

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


reader.setPrompt('명령하세요: ("exit" to fisnish) ');

reader.prompt(); 

reader.on("line", (line) => {
    if(line == "exit"){
        reader.close();
    }

    // 사용자 input 파싱하여 배열 저장
    let inputWords = line.split('$');

    if(inputWords.length == 1) {
        console.log("잘못된 입력입니다. 올바르게 입력해주세요. ");
    }
    // show
    else if(inputWords[0]=='show' && inputWords.length == 2){
        showRes.show(inputWords[1]);
    }
    // delete
    else if(inputWords[0]=='delete' && inputWords.length == 2){
        deleteRes.idelete(inputWords[1]);
        showRes.show("all");
    }
    // update
    else if(inputWords[0] === 'update' && updateRes.update(inputWords[1], inputWords[2])) {
        showRes.show("all");
    }
    // add
    else if(inputWords[0] === 'add'){
        addRes.addlist(inputWords[1], inputWords[2]);
        showRes.show("all");
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
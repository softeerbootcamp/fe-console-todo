const { show } = require('./show');
const { update } = require("./update");
const { idelete } = require('./delete');
const { addList } = require("./add");
const {showReg, addReg, deleteReg, updateReg} = require("./regExp");
const readline = require("readline");
const {MESSAGES, ERROR_MESSAGE} = require("./constants");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.setPrompt(MESSAGES.ENTER_COMMAND);

reader.prompt(); 

reader.on("line", (line) => {
    if(line === "exit"){
        reader.close();
    }

    // 사용자 input 파싱하여 배열 저장
    let inputWords = line.split("$");

    // show
    if(showReg.test(line)) {
        show(inputWords[1]);
    }
    // delete
    else if(deleteReg.test(line)) {
        idelete(inputWords[1]);
        show("all");
    }
    // add
    else if(addReg.test(line)) {
        addList(inputWords[1], inputWords[2]);
        show("all");
    }
    // update
    else if(updateReg.test(line)) {
        update(inputWords[1], inputWords[2]);
        show("all");
    }
    else {
        console.log(ERROR_MESSAGE.ERROR_COMMAND);
    }

    reader.prompt();
});

reader.on("close", () => {
    process.exit();
})
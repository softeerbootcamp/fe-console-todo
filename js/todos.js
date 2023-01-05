const input = require("./io/input");
const show = require("./functions/show");
const add = require("./functions/add");
const delete_ = require("./functions/delete");
const update = require("./functions/update");
const io = require("./io/ioException");

function play() {
    try {
        const inputList = input.command()
        const command = inputList[0].toLowerCase()
        if (command === 'quit') return
        io.inputListLengthCheck(inputList)
        if (command === 'show') {
            const showCom = inputList[1].toLowerCase()
            if (showCom == 'all') {
                show.all()
            }
            else {
                show.thisStatus(showCom)
            }
        }
        if (command === 'add') {
            add.item(inputList[1], inputList[2])
        }
        if (command === 'delete') {
            delete_.item(inputList[1])
        }
        if (command === 'update') {
            update.status(inputList[1], inputList[2])
        }
    } catch (err) {
        console.log(err.message)
    }
    play()
}

play()
const input = require("./io/input");
const show = require("./functions/show");
const add = require("./functions/add");
const delete_ = require("./functions/delete");
const update = require("./functions/update");
const output = require("./io/output");

function play() {
    try {
        const inputList = input.command()
        const command = inputList[0].toLowerCase()

        if (command === 'show') {
            const showCom = inputList[1].toLowerCase()
            if (showCom == 'all') {
                show.all()
            }
            else {
                show.thisStatus(showCom)
            }
        }
        else if (command === 'add') {
            add.item(inputList[1], inputList[2])
        }
        else if (command === 'delete') {
            delete_.item(inputList[1])
        }
        else if (command === 'update') {
            update.status(inputList[1], inputList[2])
        }
        else if (command === 'quit') return
        else output.wrongCommand(command)
    } catch (err) {
        console.log(err.message)
    }
    play()
}

play()
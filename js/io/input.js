const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function command() {
    let input = []
    rl.question("명령하세요: ", (wholeInput) => {
        input = wholeInput.split('$').map(element => element)
        rl.close()
    })
    rl.on("close", () => {
        // console.log(input)
        process.exit
    })

    return input
}
module.exports.command = command
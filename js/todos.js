// var show = require("./functions/show");
// var add = require("./functions/add");
// var update = require("./functions/update");
var delete_ = require("./functions/delete");
// var io = require("./io/ioException");
var input = require("./io/input");




// let a =  
let a = input.command()
console.log(a)


// add.item('피아노 공부',['music','cheap'])
// show.all()
// show.thisStatus('todo')
// update.stauts(121,'doing')

delete_.item(121)
// show.thisStatus('todo')
// io.isValidCommand('done')
// io.isValidStatus('done')
// io.isValidIndex(2)
// console.log("-------")
// show.all()

// // console.log("hello world")

// // var lists = input.command()

// console.log('lists')
var show = require("./functions/show");
var add = require("./functions/add");
var update = require("./functions/update");
var delete_ = require("./functions/delete");
var io = require("./io/ioException");

add.item('피아노 공부',['music','cheap'])
show.all()
show.thisStatus('todo')
update.stauts(121,'doing')

delete_.item(312324)
show.thisStatus('todo')
io.isValidStatus('done')
// console.log("-------")
// show.all()

// // console.log("hello world")

// // var lists = input.command()

// console.log('lists')
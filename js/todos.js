var show = require("./functions/show");
var add = require("./functions/add");
var delete_ = require("./functions/delete");

add.item('피아노 공부',['music','cheap'])
show.all()
show.thisStatus('todo')
delete_.item(121)
console.log("-------")
show.all()
console.log("hello world")
const add = require('./add.js');
const remove= require('./delete.js');
const show=require('./show.js');
const update=require('./update.js');
const todos=require('./todos.js');


const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getInput(){
    rl.question('명령하세요 : ', (line) => {
        if (line=='exit'){
            rl.close();
            rl.on('close',function(){
                process.exit();
            });
        }
        else{
            let str=line.split('$');
            //show
            if (str[0]=='show'){
                show(str[1]);
            }
            //add
            else if (str[0]=='add'){
                add(str[1],str[2]);
            }
            //delete
            else if (str[0]=='delete'){
                remove(todos,str[1]);
            }
            //update
            else if(str[0]=='update'){
                update(todos,str[1],str[2]);
        }
        getInput();
        }
    });
}
getInput();
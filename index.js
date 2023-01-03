const { readCommand } = require('./View/InputView');
const { MESSAGE, COMMAND } = require('./constants');
const { parseCommand } = require('./util/util');
const { handleShow } = require('./util/showUtil');
const { handleAdd } = require('./util/addUtil');
const { handleDelete } = require('./util/deleteUtil');
const { handleUpdate } = require('./util/updateUtil');
const todos = require('./todos');

function play() {
  readCommand(MESSAGE.ENTER_COMMAND, (cmd) => {
    const [command, middle, tags] = parseCommand(cmd);
    if (command === COMMAND.SHOW) handleShow(todos, middle);
    if (command === COMMAND.ADD) handleAdd(todos, middle, tags);
    if (command === COMMAND.DELETE) handleDelete(todos, middle);
    if (command === COMMAND.UPDATE) handleUpdate(todos, middle, tags);
    play();
  });
}

play();

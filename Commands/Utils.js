function findTodoIdx(todos, idCond) {
    let foundIdx;
    todos.forEach(({id}, idx) => {
        if(id === idCond) {
            foundIdx = idx;
        }
    });
    return foundIdx;
}

module.exports = {
    findTodoIdx
};
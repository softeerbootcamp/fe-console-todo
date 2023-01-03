const commandTypes = {
    SHOW: 'show',
    ADD: 'add',
    UPDATE: 'update',
    DELETE: 'delete'
};
Object.freeze(commandTypes);

const showOptions = {
    ALL: 'all',
    TODO: 'todo',
    DOING: 'doing',
    DONE: 'done'
};
Object.freeze(showOptions);

const statusTypes = {
    TODO: 'todo',
    DOING: 'doing',
    DONE: 'done'
};
Object.freeze(statusTypes);

module.exports = {
    commandTypes,
    showOptions,
    statusTypes
};
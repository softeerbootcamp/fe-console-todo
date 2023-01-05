let showReg = /\n?show\$[all, todo, doing, done]/
let addReg = /add\$[A-Za-z0-9_-]*\$\[[A-Za-z0-9\_\-\'\"]\]*/
let deleteReg = /delete\$[0-9][^A-Za-z]*/
let updateReg = /update\$[0-9][^a-zA-Z]*\$[todo, doing, done]/

module.exports = {
    showReg,
    addReg,
    deleteReg,
    updateReg
}


var output = require('../io/output')
const statusList = ['todo','doing','done']
function isValidStatus(status) {
    if(statusList.includes(status)){
        return true
    }
    output.wrongStatus()
    return false
}

module.exports.isValidStatus = isValidStatus;
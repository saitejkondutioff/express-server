const permission = require('/home/saitejkonduti/node_workspace/express-server/Extra/utils/permissions.js')
const validation = require ('/home/saitejkonduti/node_workspace/express-server/Extra/utils/validation.js')

//validation.validateUsers(validation.users)
//console.log("-----------")
//console.log(permission.hasPermissions(permission.permissions.getUsers,'head-trainer','all'))

module.exports = {
    permission, validation}
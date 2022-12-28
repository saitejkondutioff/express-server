
// Creating object

// Function call and passing parameters for module type, role, permission
const hasPermissions = (moduleName, Role , permissiontype) => {
    return (moduleName[permissiontype] && moduleName[permissiontype].includes(Role)) ? true : false

}

// Exporting hasPermissions function
module.exports = {
    hasPermissions
}

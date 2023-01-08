
// Function call and passing parameters for module type, role, permission
const hasPermissions = (moduleName:object, Role:string , permissiontype:string):Boolean => {
    return (moduleName[permissiontype] && moduleName[permissiontype].includes(Role)) ? true : false

}

// Exporting hasPermissions function
export {
    hasPermissions
}

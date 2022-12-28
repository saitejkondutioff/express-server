
// Creating object

const permissions={
    "getUsers" : {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [], 
    }
}

    const hasPermissions = (moduleName, Role , permissiontype) => {
        return (moduleName[permissiontype] && moduleName[permissiontype].includes(Role)) ? true : false
    
    }

// Function call and passing parameters for module type, role, permission

module.exports = {
    permissions,hasPermissions
}

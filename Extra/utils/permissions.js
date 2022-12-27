
// Creating object

let permissions={
    "getUsers" : {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [], 
    }
}

let getUsers = permissions.getUsers


function hasPermissions(moduleName, Role , permissiontype){

    // Printing all the available permissions
    perms = Object.keys(moduleName)
    console.log(perms)

    // Permission parameter passed by function
    console.log(permissiontype)

    // Role Parameter passed by function
    console.log(Role)
    
    // check if Permission parameter passed by function is present in Permissions list
    if (perms.includes(permissiontype) == true){
    // index number of permission parameter passed
        index_no = perms.indexOf(permissiontype);
    // Retreiveing list of roles present in given Permission role.
        Roles = Object.values(moduleName)[index_no]
    // check if passed Role has Correct permission    
        if(Roles.includes(Role) == true){
            console.log("true")

        }
        else{
            console.log("false")
        }

    }


}


// Function call and passing parameters for module type, role, permission
hasPermissions(getUsers, "trainer", "all")


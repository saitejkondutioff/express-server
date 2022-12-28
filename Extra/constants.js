const permissions = {"getUsers" : {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [], 
}
}


//Exporting permissions
module.exports = {
    permissions
}
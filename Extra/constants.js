const permissions = {"getUsers" : {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [], 
}
}



module.exports = {
    permissions
}
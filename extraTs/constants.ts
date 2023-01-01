type Permissions = {
    "getUsers" : {
        all: object,
        read : object,
        write : object,
        delete: object, 

};
}

const permissions: Permissions= {"getUsers" : {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [], 
}
};


//Exporting permissions
export{
    permissions
}
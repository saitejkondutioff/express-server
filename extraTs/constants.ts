import { permissions } from "./interfaces";


const permissions: permissions= {"getUsers" : {
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
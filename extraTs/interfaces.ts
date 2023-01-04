export interface Permissions {
    "getUsers" : {
        all: object,
        read : object,
        write : object,
        delete: object, 

};
}

export interface users  {
    traineeEmail: string,
    reviewerEmail: string,
    outsideremail: string,
}
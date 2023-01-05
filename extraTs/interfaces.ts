export interface Permissions {
    "getUsers" : {
        all: string[],
        read : string[],
        write : string[],
        delete: string[], 

};
}

export interface users  {
    traineeEmail: string,
    reviewerEmail: string,
    outsideremail: string,
}
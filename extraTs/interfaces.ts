export interface permissions {
    "getUsers" : {
        all: string[],
        read : string[],
        write : string[],
        delete: string[], 
};
}

export interface IUsers  {
    traineeEmail: string,
    reviewerEmail: string,
    outsideremail: string,
}
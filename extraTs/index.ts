
import {diamond, equilateral} from "./patterns/index"
import { hasPermissions } from "./utils/index";
import { permissions } from "./constants";
import { validateUsers } from "./utils/index";



const users:object = {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    outsideremail: 'saitejkonduti@gmail.com'
}


//Patterns task
//calling Diamond and Equilateral functions from .patterns/index.js
diamond(5);
equilateral(5);

//Permissions task
//calling hasPermissions function from /utils/index.js and permissions object from /constants.js
console.log(hasPermissions((permissions.getUsers),'head-trainer','all'))

//validation task
//calling validateUsers function from .utils/index.js
validateUsers(users)

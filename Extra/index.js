const final = require('./patterns/index.js');
const final_valid = require('./utils/index.js')
const constant_words = require('./constants.js')


const users = {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    outsideremail: 'saitejkonduti@gmail.com'
}

//Patterns task
//calling Diamond and Equilateral functions from .patterns/index.js
final.Diamond(5);
final.Equilateral(5);

//Permissions task
//calling hasPermissions function from /utils/index.js and permissions object from /constants.js
console.log(final_valid.permission.hasPermissions(constant_words.permissions.getUsers,'head-trainer','all'))

//validation task
//calling validateUsers function from .utils/index.js
final_valid.validation.validateUsers(users)
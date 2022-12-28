const final = require('/home/saitejkonduti/node_workspace/express-server/Extra/Patterns/index.js');
const final_valid = require('/home/saitejkonduti/node_workspace/express-server/Extra/utils/index.js')
const constant_words = require('/home/saitejkonduti/node_workspace/express-server/Extra/constants.js')


const users = {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    outsideremail: 'saitejkonduti@gmail.com'
}

final.Diamond(5);
final.Equilateral(5);



//final_valid.validation.validateUsers(final_valid.validation.users)

//final_valid.validation.validateUsers(final_valid.validation.users)

console.log(final_valid.permission.hasPermissions(constant_words.permissions.getUsers,'head-trainer','all'))

final_valid.validation.validateUsers(users)
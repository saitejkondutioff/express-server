"use strict";
exports.__esModule = true;
var index_1 = require("./patterns/index");
var index_2 = require("./utils/index");
var constants_1 = require("./constants");
var index_3 = require("./utils/index");
var users = {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    outsideremail: 'saitejkonduti@gmail.com'
};
//Patterns task
//calling Diamond and Equilateral functions from .patterns/index.js
index_1.diamond(5);
index_1.equilateral(5);
//Permissions task
//calling hasPermissions function from /utils/index.js and permissions object from /constants.js
console.log(index_2.hasPermissions((constants_1.permissions.getUsers), 'head-trainer', 'all'));
//validation task
//calling validateUsers function from .utils/index.js
index_3.validateUsers(users);
